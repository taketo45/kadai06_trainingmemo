
'use strict';

//###############################################
// 必要なFirebaseライブラリを読み込み
//###############################################
import { initializeApp } 
    from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } 
    from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import {db, auth, provider, googleAuthLaterProcess} from "./firebase.js";

const $login = $("#login-btn");
const to_url = "traininglog.html";
const out_url = "index.html";

//###############################################
//Login処理
//###############################################
$login.on("click",function(){
    googleAuthLaterProcess(auth, provider, to_url);
});
