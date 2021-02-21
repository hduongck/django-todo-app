from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from joblib import dump

iris = load_iris()
X = iris.data
y = iris.target
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=1, stratify=y)
clf_rf = RandomForestClassifier(random_state = 1, n_estimators = 10, n_jobs = -1)
estimator_rf = clf_rf
estimator_rf.fit(X=X_train, y=y_train)
dump(estimator_rf, 'IRISRandomForestClassifier.joblib')