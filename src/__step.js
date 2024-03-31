/**
 * INITIAL SETUP-------------------->>>>>
 * Firebase use korar step gulo holo :
 *1. Visit: Console.firebase.google.com
 *2. create project ( skip google analytics)
 *3. Register app (create config)
 *4. install firebase: npm install firebase
 *5. add config file to your project (file er nam dibo "firebase.config.js") aivabe.
 *6. DANGER: Do not publish or make firebase config to publick by pushing those to github.(firebase er code toko private rakhte hobe.)
 *
 *
 * INTERGATION ------------------------>>>>>>>>>>
 *7. Visit: Go to docs > Build > Authentication > Web > get started a jaite hobe. Oikhane kiso code thakbe ta step by step code a import korte hobe.
 *8. Login component a import korlam: import { getAuth } from "firebase/auth";
 *9. Than firebase.config.js file theke app namer function k export korlam.
 *10. Than component er moddhe likhlam: const auth = getAuth(app)
 *
 *
 * PROVIDER SETUP ---------------------->>>>>>>>>>> For Google
 *11. Next step a google category theke code nia login form a import googleAuthProvider and create a new provider. import { GoogleAuthProvider } from "firebase/auth"; and component er vitore const provider = new GoogleAuthProvider(); likhte hobe.
 *12. Than onClick a handleGoogleSignIn functio k call koresi. ai function er moddeh signInWithPopup namer buildin function k call korar somoi perameter a uporer auth and provider namer 2 ta variable k pathia dita hobe. ar signInWithPopup k upore import kore nita hobe.
 *13. Tarpor signInWithPopup ai function er vitore .than er maddhome result k pabo. arr .catch er maddhome error k dhorbo. .catch(err => console.log(err))
 *14. Tarpore project run korle akta error pabo. karon firebase a google er permission on kore dita hobe.
 *15. Google k permissn newer jonno firebox er amar site a gia > Build Category > Authinication > Sign-in-Method a gia google ba jeitar permisson nia user k login korte dibo seita enabole korbo and email dita hobe.
 *16. By default sudho localhost url a ai popupta hobe. Ar custom domain a use korte hole setting theke domain er nam ta add korte hobe.
 *17. Aki vabe signOut() aitake age importe kore nia call korle sign in kora data remove kore diba. ai method perameter a auth varibale take sudho nei.
 *
 *
 * PROVIDER SETUP ---------------------->>>>>>>>>>> For Github
 * 1. 1st a amar nijer github a gia setting > Developer Seting > Github apps > new github apps > Than aikhane project er nam, amar project er live linker url home page er , Than Callbac url ta pawer jonno: Amr firebase project a gia Authintication > signIn method > github > github select korle akta popup a url der. oi url : https://simple-firebase-3bdad.firebaseapp.com/__/auth/handler
 * 2. Ar webhook er active k uncheck kore dia submit korte hobe.
 * 3. sumbit korar pore jei page a nia jabe, seikhan theke client ID and client secreet generate kore code 2 ta firebase er github select korar somoi fillup korte hobe. Than save korlei githhub oo google er moto add hoia jabe.
 * 4. Tarpor ager motoi githubAuthProvider add korar jonno 1st a docs > build > authintication > web > github > oi page theke ai code gulo nia project a ager moto kore import kore use korte hobe. const provider = new GithubAuthProvider();
 */