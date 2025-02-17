# installation du projet
Dans un premier temps, j'ai installé la dernière version de Node.js et Yarn avec :
npm install --global yarn
Puis, j'ai installé Docker manuellement sur mon PC et accédé au serveur MySQL avec :
docker exec -it mysql-container mysql -u root -p
J'ai installé Prisma pour la gestion de la base de données dans le répertoire backend.
J'ai installé les différentes dépendances avec yarn install et lancé le serveur avec yarn dev pour les deux répertoires.
Enfin, j'ai importé le projet depuis GitHub.

## 1. Création et modification des tâches (TaskController.ts)
Implémentation de la méthode create() et update() en utilisant SaveTaskUseCase pour gérer à la fois la création et la mise à jour des tâches.

## 2. Refonte du UseCase (SaveTaskUseCase.ts)
Fusion de la création et de la mise à jour dans une seule méthode handle(dto: SaveTaskDto), en vérifiant si l'ID existe :
Si oui → mise à jour de la tâche.
Sinon → création d’une nouvelle tâche.
Ajout d'une validation pour éviter d'enregistrer une tâche sans nom.

## 3. Refactorisation du TaskRepository.ts
Remplacement des méthodes create() et update() par une unique méthode save() capable de gérer les deux actions avec Prisma.

## avis
J'ai éprouvé quelques difficultés lors des différentes installations de prisma et yarn.
mais j'ai réussi à résoudre les problèmes.