from flask import request, url_for,jsonify,json,current_app,Blueprint
from bs4 import BeautifulSoup
import subprocess,sys,requests
from flask_restful import Resource


blueprint = Blueprint('movie', __name__)

@blueprint.route('/play/<string:name>', methods=['GET'])
def play(name):
    print(name)
    api_key = current_app.config['YOUTUBE_API_KEY']
    search_url = 'https://www.googleapis.com/youtube/v3/search'
    params = {
        'part': 'snippet',
        'q': name,
        'key': api_key
    }
    
    response = requests.get(search_url, params=params)

    data = response.json()
    print(data)
    # Retrieve the URL of the first video from the search results
    if 'items' in data and len(data['items']) > 0:
        video_id = data['items'][0]['id']['videoId']
        video_url = f'https://www.youtube.com/watch?v={video_id}'
        return jsonify({'video_url': video_url})

    return jsonify({'message': 'Video not found'})