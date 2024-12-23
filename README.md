# Suivi des Projets Helm

Ce document fournit un suivi des différents projets Helm créés dans le cadre du cours Kubernetes M2 - Partie 1 (Création Minikube + Utilisation HELM).

## Projets

### 1. frontend-helm

**Description**: Un chart Helm pour déployer une application frontend sur Kubernetes.

**Fichiers principaux**:
- `.helmignore`: Fichiers à ignorer lors de la création du package Helm.
- `templates/deployment.yaml`: Déploie un conteneur Nginx.
- `templates/namespace.yaml`: Crée le namespace `front`.
- `templates/secrets.yaml`: Définit les secrets pour l'application.
- `templates/service.yaml`: Crée un service pour exposer l'application.
- `templates/volume.yaml`: Définit un volume persistant.
- `templates/volumes.yaml`: Crée une demande de volume persistant.
- `values.yaml`: Contient les valeurs par défaut pour les variables utilisées dans les templates.

### 2. backend

**Description**: Un chart Helm pour déployer une application backend sur Kubernetes.

**Fichiers principaux**:
- `.helmignore`: Fichiers à ignorer lors de la création du package Helm.
- `templates/deployment.yaml`: Déploie un conteneur Node.js.
- `templates/namespace.yaml`: Crée le namespace `back`.
- `templates/secrets.yaml`: Définit les secrets pour l'application.
- `templates/service.yaml`: Crée un service pour exposer l'application.
- `templates/volume.yaml`: Définit un volume persistant.
- `templates/volumes.yaml`: Crée une demande de volume persistant.
- `values.yaml`: Contient les valeurs par défaut pour les variables utilisées dans les templates.

### 3. bdd

**Description**: Un chart Helm pour déployer une base de données PostgreSQL sur Kubernetes.

**Fichiers principaux**:
- `.helmignore`: Fichiers à ignorer lors de la création du package Helm.
- `templates/deployment.yaml`: Déploie un conteneur PostgreSQL.
- `templates/namespace.yaml`: Crée le namespace `bdd`.
- `templates/secrets.yaml`: Définit les secrets pour l'application.
- `templates/service.yaml`: Crée un service pour exposer la base de données.
- `templates/volume.yaml`: Définit un volume persistant.
- `templates/volumes.yaml`: Crée une demande de volume persistant.
- `values.yaml`: Contient les valeurs par défaut pour les variables utilisées dans les templates.

## Dockerfile

Pour chaque projet, un `Dockerfile` a été créé pour construire l'image Docker de l'application. Ce fichier est utilisé pour définir l'environnement et les étapes nécessaires pour construire l'image.

## Commandes Helm et Minikube

### Commandes Helm

**Installer un chart Helm:**
```sh
helm install <nom_release> <chemin_chart>
```

**Mettre à jour un chart Helm:**
```sh
helm upgrade <nom_release> <chemin_chart>
```

**Désinstaller un chart Helm:**
```sh
helm uninstall <nom_release>
```

### Commandes Minikube

**Démarrer Minikube:**
```sh
minikube start
```

**Arrêter Minikube:**
```sh
minikube stop
```

**Supprimer Minikube:**
```sh
minikube delete
```

### Utilisation de k9s

k9s est un outil de gestion de cluster Kubernetes en ligne de commande. Il permet de visualiser et de gérer les ressources Kubernetes de manière interactive.

**Lancer k9s:**
```sh
k9s
```

## Conclusion

Ces charts Helm permettent de déployer des applications frontend, backend et une base de données PostgreSQL sur un cluster Kubernetes. Chaque chart est configuré pour créer un namespace dédié et déployer les ressources nécessaires. Les Dockerfiles permettent de construire les images Docker pour chaque application, et les commandes Helm et Minikube facilitent la gestion des déploiements. k9s est un outil utile pour gérer les ressources Kubernetes de manière interactive.
