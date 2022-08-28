echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* bkosa2@attu.cs.washington.edu:/cse/web/homes/bkosa2/

echo "Done!"