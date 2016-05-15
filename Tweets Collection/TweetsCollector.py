import tweepy
from tweepy.api import API

API_KEY = 'OrJhTNJr5Hw2QMJ8E4IgkGZwm'
API_SECRET = 'rioB3YDXIgff0d5RaxsQ6bNVqPIxyo1F8623HociYYQ0PjW5d4'
ACCESS_TOKEN = '216244556-DMl9QY2qbPBzhbPDXik4WyxMktbYts7VRZdS7LsL'
ACCESS_TOKEN_SECRET = 'Wx7eGa4mLXG2AD9vYC3HBJ3ID0oRPlauVeMzTKvFAggVR'
key = tweepy.OAuthHandler(API_KEY, API_SECRET)
key.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

class Stream2File(tweepy.StreamListener):
    def __init__(self, api=None):
        self.api = api or API()
        self.pres = 0
        self.limit = 150000
        self.output = open('WordCount_PB.JSON', 'a')

    def on_data(self, data):
        #print type(data.text)
        self.output.write(data.strip() + "\n\n\n")
        self.pres += 1
        if self.pres < self.limit:
            print(data+"\n")
            return True
        else:
            self.output.close()
            print 'tweets = '+str(self.pres)
            return False

stream = tweepy.streaming.Stream(key, Stream2File())
stream.filter(track=['AshWednesday'])