node {
    def app
    agent {
        docker {
            image 'docker'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("frfront:${BUILD_ID}")
    }
    
    stage('Run') {

        app.inside {
            sh 'docker run -d -p 8000:8000 -v /usr/local/bin/docker:/usr/bin/docker --name fr-app frfront:${BUILD_ID}'  
        }
    }
}
