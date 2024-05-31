node {
    def app

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

        sh 'docker run -it --entrypoint /bin/sh frfront:${BUILD_ID}'
    }
}
