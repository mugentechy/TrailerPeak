
from flask import Flask
from flask_cors import CORS
from config import configurations
from flask_jwt_extended import JWTManager
from flask_mail import Mail


cors = CORS()
mail = Mail()

def register_extensions(app):
    cors.init_app(app)
    mail.init_app(app)

def register_blueprints(app):
    from api.routes import blueprint
    app.register_blueprint(blueprint)



def create_app(configuration):
    app = Flask(__name__)
    app.config.from_object(configurations[configuration])

    register_extensions(app)
    register_blueprints(app)
 

    return app
