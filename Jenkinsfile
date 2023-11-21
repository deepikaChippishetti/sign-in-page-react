pipeline {
     agent {
        docker { image 'node:21.1.0-alpine3.18' 
         args '-p 3000:3000' }
        }
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build the APP') {
            steps {
                sh 'npm start'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}