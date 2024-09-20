
import pandas as pd
import numpy as np
df = pd.read_json(r"https://localhost:5000/api/storage")
df
df.drop(['Name','A','B','C'],axis = 1, inplace = True)
def pp(a):
    if a == 'A':
        return 1
    elif a == 'B':
        return 2
    elif a == 'C':
        return 3
mapping = {'A' : 1, 'B' :2,'C' :3}
df = df.replace(mapping)
df
x = df.drop(['BT'], axis = 1)
x
y = df[['BT']]
y
from sklearn.preprocessing import LabelEncoder
LE = LabelEncoder() 
df['BT'] = LE.fit_transform(df['BT'])
df['BT'].unique()
y = df[['BT']]
y
from sklearn.model_selection import train_test_split
x_train,x_test,y_train,y_test = train_test_split(x,y,test_size = 0.3,random_state = 0)
from xgboost import XGBClassifier
cl = XGBClassifier()
cl.fit(x_train,y_train)