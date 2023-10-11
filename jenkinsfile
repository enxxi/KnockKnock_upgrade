pipeline { // 파이프라인의 시작을 알림
    // 스테이지 별로 다른 거
    agent any // 어떤 노예를 쓸 것인가?

    triggers {
        pollSCM('*/3 * * * *')
    }

    environment {
      AWS_ACCESS_KEY_ID = credentials('awsAccessKeyId')
      AWS_SECRET_ACCESS_KEY = credentials('awsSecretAccessKey')
      AWS_DEFAULT_REGION = 'ap-northeast-2'
      HOME = '.' // Avoid npm root owned
    }

    stages {
        // 레포지토리를 다운로드 받음
        stage('Prepare') {
            agent any
            
            steps {
                echo 'Clonning Repository'

                git url: 'https://github.com/enxxi/KnockKnock_upgrade.git', // 프로젝트 레포지토리 url
                    branch: 'dev', // 레포지토리 브랜치 어디서 클론 해올 것인가?
                    credentialsId: 'Jenkins' // 젠킨스 credentials에 작성한 ID
            }

            post { // 여기서 메일도 보낼 수 있고 슬랙도 보낼 수 있다.
                // If Maven was able to run the tests, even if some of the test
                // failed, record the test results and archive the jar file.
                success {
                    echo 'Successfully Cloned Repository'
                }

                always {
                  echo "i tried..." 
                }

                cleanup { // post에 있는 사후 처리를 다 끝냈음을 보여줌
                  echo "after all other post condition"
                }
            }
        }
        
        // aws s3 에 파일을 올림
        stage('Deploy Frontend') { // index.html을 S3에 올릴 수 있다.
          steps {
            echo 'Deploying Frontend'
            // 프론트엔드 디렉토리의 정적파일들을 S3 에 올림, 이 전에 반드시 EC2 instance profile 을 등록해야함.
            // 이전 과정에서 AWS 환경변수를 입력해줬기 때문에 잘 작동할 것이다.
            // namhoontest 자리에 S3 버킷 지정해준 이름을 작성하면 됨.
            dir ('./website'){
                sh '''
                aws s3 sync ./ s3://namhoontest
                '''
            }
          }

          post {
              // If Maven was able to run the tests, even if some of the test
              // failed, record the test results and archive the jar file.
              // 이메일에 배포를 성공했다고 보내기
              success {
                  echo 'Successfully Cloned Repository'

                  mail  to: 'wonn22@gmail.com',
                        subject: "Deploy Frontend Success",
                        body: "Successfully deployed frontend!"

              }

              failure {
                  echo 'I failed :('

                  mail  to: 'wonn22@gmail.com',
                        subject: "Failed Pipelinee",
                        body: "Something is wrong with deploy frontend"
              }
          }
        }
        
        stage('Lint Backend') { // Lint Backend 스테이지가 실행될 때 젠킨스가 알아서 이 레포지토리에서 이미지를 받아와서 일을 할 것이다.
            // Docker plugin and Docker Pipeline 두개를 깔아야 사용가능!
            agent {
              docker { // node 최신버전으로 일을 할 것이다.
                image 'node:latest' // 도커에서 노드를 다운 박아서 설치과 린트를 모두 해라
              }
            }
            
            steps {
              dir ('./server'){
                  sh '''
                  npm install&&
                  npm run lint
                  '''
              }
            }
        }
        
        stage('Test Backend') {
          agent {
            docker {
              image 'node:latest'
            }
          }
          steps {
            echo 'Test Backend'

            dir ('./server'){
                sh '''
                npm install
                npm run test
                '''
            }
          }
        }
        
        stage('Bulid Backend') { // 서버를 배포할 때 도커 이미지를 만들어서 배포한다.
          agent any
          steps {
            echo 'Build Backend'

            dir ('./server'){
                sh """
                docker build . -t server --build-arg env=${PROD}
                """
            }
          }

          post {
            failure { // bulid하다가 실패했는데 배포해 버리면 안되므로 bulid 실패했다고 에러 보이고 나머지 파이프 종료시킨다.
              error 'This pipeline stops here...'
            }
          }
        }
        
        stage('Deploy Backend') { // 실무에서는 ECS, 쿠버네티스 등 업데이트를 해야한다. 
          agent any

          steps {
            echo 'Build Backend'

            dir ('./server'){ // 원래 떠있던 이미지 지우고(아무 이지미도 안띄워져 있으면 코드 삭제해야함)
                sh '''
               
                docker run -p 80:80 -d server
                '''
            }
          }

          post {
            success {
              mail  to: 'wonn22@gmail.com',
                    subject: "Deploy Success",
                    body: "Successfully deployed!"
                  
            }
          }
        }
    }
}
