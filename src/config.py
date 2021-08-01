class Config(object):
    SCHEDULER_API_ENABLED = True
    TESTING = False


class ProductionConfig(Config):
    DEBUG = False
    SECRET_KEY = "this-is-really-changeable"
    SESSION_COOKIE_SECURE = True
    DATABASE_URL = "postgres://postgres:12345678@localhost/mod"
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:12345678@localhost/mod"


class DevelopmentConfig(Config):
    DEBUG = True
    DATABASE_URL = "postgres://postgres:12345678@localhost/mod"
    SQLALCHEMY_DATABASE_URI = (
        "postgresql://postgres:12345678@localhost/mod?client_encoding=utf8"
    )
    IMAGE_UPLOADS = "/home/username/projects/my_app/app/static/images/uploads"
    SESSION_COOKIE_SECURE = False


class TestingConfig(Config):
    TESTING = True
    DATABASE_URL = "postgres://postgres:12345678@localhost/mod"
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:12345678@localhost/mod"
