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

        sh 'pwd'
        sh 'docker run -it -p 8000:80 --rm --name FRapp FRfront:${BUILD_ID}'
    }
}
