from flask import Flask, render_template, request
from flask_cors import CORS, cross_origin

import json
import os


app = Flask(__name__)
CORS(app)


@app.route("/", methods=['POST', 'GET'])
@cross_origin()
def hello_world():
    return "<h1>ISRO Solar brust identifier</h1>"


@app.route("/upload", methods=['POST'])
def uploader():
    if request.method == 'POST':
        fpath = os.path.dirname(__file__) + "/data.json"
        print(fpath)
        with open(fpath, 'r') as openfile:
            dataDict = json.load(openfile)
            dataJson = json.dumps(dataDict)
        return dataJson


if __name__ == "__main__":
    app.run(debug=True)
