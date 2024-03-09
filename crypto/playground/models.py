from django.db import models

class User(models.Model):
    exchange = models.CharField(max_length=100)
    symbol = models.CharField(max_length=100)
    stoploss = models.FloatField()


    def __str__(self):
        return self.username


# Create your models here.              