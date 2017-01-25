# Patternstack node server
A node.js server for a PatternFly front-end application.

## Running locally

```
npm install
npm start
```

## Running locally with Docker
If you have docker installed loaclly, you can run this quickstart using Docker:
```
docker-compose up --build
```

## Running remotely on OpenShift

### Install OpenShift
The OpenShift vagrant VM is the recommended way to get up and running with OpenShift.  Follow the instructions here:
https://www.openshift.org/vm/

### Deploy on OpenShift
Deploy this application on OpenShift using the commands:

```
oc new-app centos/nodejs-4-centos7~https://github.com/bleathem/patternstack-node.git
```

To monitor the build status:
```
oc get builds
oc logs build/patternstack-node-1
```

To access the service:
```
oc expose service patternstack-node
oc get services
```
