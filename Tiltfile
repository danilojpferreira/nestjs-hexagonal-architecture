# Docker image build
docker_build(
  'app',
  context = '.',
  target = 'development',
  only = [
    'src',
    'package.json',
    'pnpm-lock.yaml',
    'tsconfig.json',
  ],
  live_update = [ sync('src', '/app/src') ]
)

# Deployment to Kubernetes
k8s_yaml('.k8s.yaml')

# Definition of the resource in Tilt
k8s_resource(
  'app',
  labels = ['app'],
  port_forwards = '3000:3000'
)
