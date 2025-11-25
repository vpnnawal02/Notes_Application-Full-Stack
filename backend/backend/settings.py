from pathlib import Path
from datetime import timedelta
import os
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

# -------------------
#  SECURITY SETTINGS
# -------------------

SECRET_KEY = os.getenv("SECRET_KEY", "dev-secret-key")  
DEBUG = os.getenv("DEBUG", "True").lower() == "true"

ALLOWED_HOSTS = os.getenv("ALLOWED_HOSTS", "*").split(",")

# -------------------
#     INSTALLED APPS
# -------------------

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    "api",
    "rest_framework",
    "corsheaders",
]

# -------------------
#      MIDDLEWARE
# -------------------

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",   # MUST BE FIRST
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

# -------------------
#         TEMPLATES
# -------------------

ROOT_URLCONF = "backend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "backend.wsgi.application"

# -------------------
#        DATABASE
# -------------------

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

# -------------------
#   PASSWORD POLICY
# -------------------

AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
]

# -------------------
#     INTERNATIONAL
# -------------------

LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True

# -------------------
#     STATIC FILES
# -------------------

STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "static"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# -------------------
#        REST FRAMEWORK
# -------------------

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticated",
    ],
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=30),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
}

# -------------------
#          CORS
# -------------------

# Allow only your Netlify frontend
CORS_ALLOW_ALL_ORIGINS = False
CORS_ALLOWED_ORIGINS = [
    "https://notesapplication-02.netlify.app",
]

CORS_ALLOW_CREDENTIALS = True

CORS_ALLOW_HEADERS = [
    "accept",
    "accept-encoding",
    "authorization",
    "content-type",
    "origin",
    "x-csrftoken",
    "x-requested-with",
]

CORS_ALLOW_METHODS = [
    "DELETE",
    "GET",
    "OPTIONS",
    "PATCH",
    "POST",
    "PUT",
]
