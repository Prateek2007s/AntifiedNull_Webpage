from flask import Flask, render_template, request, redirect, url_for
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import URL

app = Flask(__name__)
app.config['SECRET_KEY'] = '697797eefc15a9fde15fa5ed16186d4a'

class VideoForm(FlaskForm):
    video_url = StringField('Enter Video URL', validators=[URL()])
    submit = SubmitField('Submit')

@app.route('/', methods=['GET', 'POST'])
def index():
    form = VideoForm()
    if form.validate_on_submit():
        video_url = form.video_url.data
        return redirect(url_for('player', video_url=video_url))
    return render_template('index.html', form=form)

@app.route('/player', methods=['GET'])
def player():
    video_url = request.args.get('video_url')
    return render_template('player.html', video_url=video_url)

if __name__ == '__main__':
    app.run(debug=True)
