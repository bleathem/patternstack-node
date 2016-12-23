# Patternstack node server
A node.js server for a PatternFly front-end application.

## Running locally

```
npm install
npm start
```

## Running on OpenShift

### Install OpenShift
The OpenShift vagrant VM is the recommended way to get up and running with OpenShift.  Follow the instructions here:
https://www.openshift.org/vm/

### Deploy on OpenShift
Deploy this application on OpenShift using the commands:

```
oc new-app centos/nodejs-4-centos7~https://github.com/bleathem/patternstack-node.git
oc expose service patternstack-node
oc get services
```
