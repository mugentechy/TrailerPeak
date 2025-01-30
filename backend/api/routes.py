from flask import request, url_for,jsonify,json,current_app,Blueprint
from flask_restful import Resource


blueprint = Blueprint('movie', __name__)

@blueprint.route('/play/<string:name>', methods=['GET'])
def play(name):
    return jsonify({'message': 'Video not found'})