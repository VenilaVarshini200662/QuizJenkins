pipeline {
  agent any

  stages {

    stage('Git Clone') {
      steps {
        git 'https://your-repo-url.git'
      }
    }

    stage('Build') {
      steps {
        bat 'mvn clean package'
      }
    }

    stage('SonarQube Analysis') {
      steps {
        bat 'mvn sonar:sonar'
      }
    }

    stage('Deploy to Artifactory') {
      steps {
        bat 'mvn deploy'
      }
    }
  }
}
