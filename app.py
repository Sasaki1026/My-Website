from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def aboutMe():
    return render_template('about.html')

@app.route('/work1')
def Works1():
    return render_template('work1.html')

@app.route('/work2')
def Works2():
    return render_template('work2.html')

@app.route('/work3')
def Works3():
    return render_template('work3.html')

@app.route('/others')
def Others():
    return render_template('others.html')
        
if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=True)
