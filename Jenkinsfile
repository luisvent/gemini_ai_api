pipeline {
    agent {
        node {
            label 'agent1'
            }
      }
    triggers {
        pollSCM '*/5 * * * *'
    }
    stages {
        stage('Test') {
            steps {
                echo "Testing.."
                bat """
                """
            }
        }
        stage('Stop Server') {
            steps {
                echo 'Stopping server....'
                bat """
                   @echo off

                   REM Check if the service is running on port 3930
                   netstat -ano | findstr ":3930.*LISTENING" >nul
                   if %errorlevel% equ 0 (
                       REM If service is running, find its PID and kill the process
                       for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3930.*LISTENING"') do (
                           echo Service running on port 3930 with PID: %%a
                           taskkill /F /PID %%a >nul
                           echo Service on port 3930 has been stopped.
                       )
                   ) else (
                       echo No service found running on port 3930.
                   )

                    REM Exit with success code 0
                    exit /b 0
                """
            }
        }
        stage('Deploy Api') {
            steps {
                echo 'Deliver....'
                bat """
                echo "doing delivery stuff.."
                xcopy *.* "C:\\Sites\\chat_ai_api" /s /e /y
                """
            }
        }
        stage('Deploy Web') {
            steps {
                echo 'Deliver....'
                bat """
                echo "doing delivery stuff.."
                cd docs
                xcopy *.* "C:\\Sites\\chat_ai_web" /s /e /y
                """
            }
        }
        stage('Dependencies') {
            steps {
                echo "Building.."
                bat """
                cd "C:\\Sites\\chat_ai_api"
                npm install
                """
            }
        }
    }
    post {
        success {
          echo "running.."
          bat """
          REM cd "site-path"
          REM node app.js
          exit /b 0
          """
        }
      }
}
