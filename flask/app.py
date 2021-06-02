from flask import Flask, render_template, request, redirect, session, url_for, flash
from assets.Comein import Comein
from assets.Register import Register
from assets.Createlobby import Createlobby
from assets.Uppload import Upload
from flask_sqlalchemy import SQLAlchemy
import hashlib
import os
from math import ceil
from faker import Factory


app = Flask(__name__)
SECRET_KEY = os.urandom(32)
app.config['SECRET_KEY'] = SECRET_KEY
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:pass@localhost/lobhub'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    type = db.Column(db.String(10), unique=False, nullable=False)
    lobbies = db.relationship('Lobbies', backref='member', lazy='dynamic')

    def __repr__(self):
        return '<Users %r>' % self.id


class Lobbies(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner = db.Column(db.Integer, db.ForeignKey('users.id'))
    type = db.Column(db.Integer, db.ForeignKey('type.id'))
    color = db.Column(db.String(10), unique=False, nullable=False)
    keycode = db.Column(db.String(32), unique=False, nullable=False)
    results = db.relationship('Result', backref='ender', lazy='dynamic')

    def __repr__(self):
        return '<Lobbies %r>' % self.id


class Type(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    count_tasks = db.Column(db.Integer, primary_key=False)
    count_mobs = db.Column(db.Integer, primary_key=False)
    map = db.Column(db.LargeBinary, primary_key=False)
    map_img = db.Column(db.LargeBinary(length=(2**24)-1), primary_key=False)
    fone_img = db.Column(db.LargeBinary(length=(2**24)-1), primary_key=False)
    lobbies = db.relationship('Lobbies', backref='creater', lazy='dynamic')

    def __repr__(self):
        return '<Type %r>' % self.id


class Result(db.Model):
    id = db.Column(db.Integer, db.ForeignKey('lobbies.id'), primary_key=True)
    status = db.Column(db.String(50), unique=False, nullable=False)
    time = db.Column(db.BigInteger, unique=False, nullable=False)

    def __repr__(self):
        return '<Result %r>' % self.id


class u_in_l(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    lobbie_id = db.Column(db.Integer, primary_key=True)
    X = db.Column(db.Integer, primary_key=False)
    Y = db.Column(db.Integer, primary_key=False)
    color = db.Column(db.String(10), primary_key=False)


    def __repr__(self):
        return '<UL %r>' % str(self.user_id) + " " + str(self.lobbie_id)


@app.route('/', methods=['GET', 'POST'])
def comein():
    if session.get('name'):
        return redirect('/lobbies')
    form = Comein()
    if request.method == "POST":
        if form.validate_on_submit():
            name = form.login.data
            if Users.query.filter_by(name=name).first():
                color = Factory.create().hex_color()
                r, g, b = tuple(int(color.lstrip('#')[i:i + 2], 16) for i in (0, 2, 4))
                text_color = '#000000' if (r*0.299 + g*0.587 + b*0.114) > 150 else '#ffffff'
                session['name'] = form.login.data
                session['role'] = Users.query.filter_by(name=form.login.data).first().type
                session['color'] = color
                session['r'] = r
                session['g'] = g
                session['b'] = b
                session['textColor'] = text_color
                return redirect('/lobbies')
            else:
                flash('nickname does not exist')

    return render_template("comein.html", form=form)


@app.route('/fastregister', methods=['GET', 'POST'])
def fastregister():
    if session.get('name'):
        return redirect('/lobbies')
    form = Register()
    if request.method == "POST":
        if form.validate_on_submit():
            name = form.login.data
            type = form.role.data
            if not Users.query.filter_by(name=name).first():
                user = Users(name=name, type=type)
                db.session.add(user)
                db.session.commit()
                return redirect('/')
            else:
                flash('nickname does exist yet')

    return render_template("fastregister.html", form=form)


@app.route('/lobbies', methods=['GET', 'POST'])
def lobbies():
    if not session.get('name'):
        return redirect('/')

    if session.get('key'):
        return redirect('lobbie/' + session['key'])

    return render_template("lobbies.html", lobbies=Lobbies, ul=u_in_l, users=Users, user=None)



@app.route('/mylobbies', methods=['GET', 'POST'])
def mylobbies():
    if not session.get('name'):
        return redirect('/')
    return render_template("lobbies.html", lobbies=Lobbies, ul=u_in_l, users=Users, user=Users.query.filter_by(name=session['name']).first().id)


@app.route('/createlobby', methods=['GET', 'POST'])
def createlobby():
    if not session.get('name'):
        return redirect('/')
    form = Createlobby()
    owners = [(i.id, i.name) for i in Users.query.filter_by(type='teacher').all()]
    form.owmer.choices = owners
    if request.method == "POST":
        if form.validate_on_submit():
            color = Factory.create().hex_color()
            lobby = Lobbies(owner=form.owmer.data, type=form.type.data, color=color,
                            keycode=hashlib.md5((color + str(form.owmer.data)).encode()).hexdigest())
            db.session.add(lobby)
            db.session.commit()
            return redirect('/lobbies')

    return render_template("createlobby.html", form=form)


@app.route('/lobby/<string:key>', methods=['GET', 'POST'])
def lobby(key):
    if not session.get('name'):
        return redirect('/')

    type = Type.query.get(Lobbies.query.filter_by(keycode=key).first().type)

    with open(os.path.join(app.root_path, 'static/source/map' + key + '.jpg'), 'wb') as file:
        file.write(type.map_img)

    with open(os.path.join(app.root_path, 'static/source/fone' + key + '.jpg'), 'wb') as file:
        file.write(type.fone_img)

    text_color = 'rgba(0, 0, 0, 0.1)' if (session['r'] * 0.299 + session['g'] * 0.587 + session['b'] * 0.114) > 150 else 'rgba(255, 255, 255, 0.1)'
    session['key'] = key

    user_id = Users.query.filter_by(name=session['name']).first().id
    lobbie_id = Lobbies.query.filter_by(keycode=key).first().id
    maybe = u_in_l.query.filter_by(user_id=user_id, lobbie_id=lobbie_id).first()
    print(maybe)
    if maybe:
        maybe.color = session['color']
        db.session.commit()
    else:
        ul = u_in_l(user_id=user_id, lobbie_id=lobbie_id, X=3, Y=21, color=session['color'])
        db.session.add(ul)
        db.session.commit()
        print(ul)

    return render_template("lobby.html", key=key, map=type.map.decode(), user=session['name'], color=session['color'], text_color=text_color, len=len, ceil=ceil, L=Lobbies, U=Users, UL=u_in_l)


@app.route('/lobbyinfo/<string:key>', methods=['GET', 'POST'])
def lobbyinfo(key):
    if not session.get('name'):
        return redirect('/')

    return render_template("lobbyinfo.html", key=key)


@app.route('/leavelobbie/<string:key>')
def leavelobbie(key):
    session.pop('key', None)
    user_id = Users.query.filter_by(name=session['name']).first().id
    lobbie_id = Lobbies.query.filter_by(keycode=key).first().id
    maybe = u_in_l.query.filter_by(user_id=user_id, lobbie_id=lobbie_id).first()
    if maybe:
        db.session.delete(maybe)
        db.session.commit()

    return redirect('/lobbies')


@app.route('/logout/<path:old>')
def logout(old):
    session.pop('name', None)
    session.pop('role', None)
    session.pop('r', None)
    session.pop('g', None)
    session.pop('b', None)
    session.pop('color', None)
    session.pop('textColor', None)
    session.pop('key', None)
    return redirect(old)


@app.route('/upload', methods=['GET', 'POST'])
def upload():
    form = Upload()
    if request.method == "POST":
        file = request.files['input']
        t = Type.query.get(form.type.data)
        t.map_img = file.read()
        # db.session.commit()

    return render_template("upload.html", form=form)


if __name__ == "__main__":
    app.run(port=8090, host='192.168.50.9', debug=True)
