import requests
import re

# Regular expression pattern to match GitHub user links
GITHUB_USER_REGEX = r'https:\/\/github\.com\/([a-zA-Z0-9-]+)'

def get_avatar_url(github_user):
    """Fetches the avatar URL for a GitHub user"""
    response = requests.get(f'https://api.github.com/users/{github_user}')
    if response.ok:
        return response.json().get('avatar_url')
    return None

with open('contributors.md', 'r') as f:
    contributors = f.read()

# Find all GitHub user links in the contributors file
github_users = re.findall(GITHUB_USER_REGEX, contributors)

# Replace each user link with their avatar
for user in github_users:
    avatar_url = get_avatar_url(user)
    if avatar_url:
        contributors = contributors.replace(f'https://github.com/{user}', f'https://github.com/{user} <img src="{avatar_url}" width="40" height="40">')

with open('contributors.md', 'w') as f:
    f.write(contributors)
