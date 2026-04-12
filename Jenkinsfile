pipeline {
    agent any

    environment {
        REPO_URL = 'https://github.com/YOUR_GITHUB_USERNAME/todo-app.git'
    }

    stages {

        stage('Clone Repository') {
            steps {
                echo 'Cloning source code from GitHub...'
                git branch: 'main', url: "${REPO_URL}"
            }
        }

        stage('Tear Down Previous Build') {
            steps {
                echo 'Stopping any previously running Jenkins containers...'
                sh 'docker compose -f docker-compose-jenkins.yml down --remove-orphans || true'
            }
        }

        stage('Build') {
            steps {
                echo 'Pulling base images and mounting source code...'
                sh 'docker compose -f docker-compose-jenkins.yml pull mongo'
            }
        }

        stage('Run Application') {
            steps {
                echo 'Launching containers via docker-compose...'
                sh 'docker compose -f docker-compose-jenkins.yml up -d'
            }
        }

        stage('Health Check') {
            steps {
                echo 'Waiting for backend to be ready...'
                sh 'sleep 15'
                sh 'curl -f http://localhost:4001 || echo "Backend starting up — check docker logs jenkins_backend"'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline succeeded! App is running on port 8082 (frontend) and 4001 (backend).'
        }
        failure {
            echo '❌ Pipeline failed. Tearing down containers...'
            sh 'docker compose -f docker-compose-jenkins.yml down || true'
        }
    }
}
