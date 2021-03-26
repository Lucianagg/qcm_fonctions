function pikachu(a,b) {
	let result = 0;
	for(let i=0; i<a; i++) {
		result += b;
	} 
	// result= result+b;
	return result;
}

function plafond(a,b) {
	let result = 0;
	for(let i=0; i<a; i++) {
		result = b;
	}
	return result;
}

function tableur(a,b) {
	let result=0;
	for(let i=0; i<=a; i++) {
		result += b;
	}
	return result;
}

function lol(a,b) {
	let result=0;
	for(let i=0.0; i<a; i+=0.5) {
		result += b;
	}
	return result;
}

function wolverine(a,b) {
	let result=0;
	for(let i=0; i<a; i++) {
		for(let j=0; j<b; j++) {
			result++;
		}
	}
	return result;
}

function ventilateur(a,b) {
	let result = 0;
	for(let i=a; i<a; i++) {
		result += b;
	}
	return result;
}

function bob(a,b,c) {
	let result=0;
	for(let i=0; i<a; i++) {
		for(let j=0; j<b; j++) {
			for(let k=0; k<c; k++) {
				result += 1;  //result (42)= result +1
				                //43   
			} 
		}
	}
	return result;
}

function calcul(a) {                          
	let result=1;             
	for(let i=2; i<=a; i++) {
		result *= i; //result = result *i 
	}
	return result;
}

// Exemple ici a = 6 , le resultat est = 1 , i=2  
// On fait résultat * i donc 1*2 = 2,  
//le résultat est = à 2 maintenant

// i va passer à 3 (a chaque fois on lui ajoute une valeur)
// maintenant on fais le résulat * i donc 
// 2*3= 6 , maintenant le résultat est =6 , i va passer à 4
//6*4= 24 , le résulat c 24 , i va passer à 5 
//24*5= 120 , le résulat c 120 i va passer à 6 
// 120*6= 720
//on peut plus continuer car i va passer à 7 et i sera plus grand que a donc le résultat sera faux donc le résultat sera 720




function python(a) {
	let result;  
	if(a<2) {
		result = 1;
	} else {
		result = a*python(a-1);
	}
	return result;
}

function erogahtyp(a) {   //Quand t'as un % ce qu'on va demandé à l'ordi c'est le reste de la division des 2 nombres exemple:       
	let result;            //4%2=2 donc le reste 0
	if(a%2 == 0) {
		result = a/2;      //donc on va utiliser ce résultat là
	}
	else {
		result = 3*a+1;     // exemple on fait 3*5 +1+16 ici on ne pouvait pas utiliser le modulo car le reste était pas à =0 
	}
	return result;
}

function pythagore(a,b) { 
	for(let i=0; i<b; i++) {
		result=erogahtyp(result);
	}
	return result;
}

function aceeilnrtt(a) {
	let result = 0;
	let v = a;
	while(v != 1) {
		v = erogahtyp(v);
		result++;
	}
	return result;
}

function micmath(a,b) {
	let result=0;
	while(a>=b) {
		a/=b;
		result++;
	}
	return result;
}

function stylo(a,b) {
	let result = 1;
	for(let i=0; i<b; i++) {
		result *= a;
	}
	return result;
}

function crayon(a,b) {
	let result = 0;
	for(let i=0; i<b; i++) {
		result *= a;
	}
	return result;
}

function minecraft(a) {
	let result = 1;
	for(let i=0; i<a; i++) {
		result *= a;
	}
	return result;
}

function nenio(a) {
	let result = Math.random(); // Google ?
	result = Math.floor(result);
	return result;
}

function carapuce_samourai(a) {
	let result = 1;
	for(let i=0; i<a; i++) {
		result = 1-result;
	}
	return result;
}

function bouteille_d_eau(a) {
	let result;
	if(a<0) {
		result=0;
	}
	else {
		if(a>0) {
			result = -1;
		}
		else {
			result = 1;
		}
	}
	return result;
}

function spiderman(a) {
	let result = 1;
	for(let i=0; i<a; i++) {
		result = bouteille_d_eau(result);
	}
	return result;
}

function az(a) {
	let result = 0;
	for(let i = 0 ; i < 20 ; i++) {
		if(i*a < 100) {
			result++;
		}
	}
	
	return result;
}

function er(a) {
	let result1 = 1;
	let result2 = 1;
	for(let i = 0 ; i < a ; i++) {
		result1++;
		result2 += result1;
		result1++;
	}
	
	return result2-result1;
}

function ty(a) {
	let result = 0;
	for(let i = 0 ; i < 20 ; i++) {
		if(i*a < 100); {
			result++;
		}
	}
	
	return result;
}

function ui(a) {
	let result = 0;
	for(let i = 0 ; i < a ; i++) {
		for(let j = 0 ; i < a ; i++) {
			result++;
		}
	}
	return result;
}

function op(a) {	
	let ooo = 0;
	let oOo = a;
	let o0o = -4;
	for(let oOO = 0; oOo > oOO ; ooo++) {
		oOo += o0o;
		o0o -= 1;
		oOO *= a;
	}
	return ooo;
}

// You need to understand "ty" first
function qs(a) {
	let tluser = 1;
	for(;tluser<a;tluser*=2);
	return tluser;
}

function df(a,b) {
	let result = 0;
	for(let i = 0 ; i < a ; i++) {
		for(let j = 0 ; j < b ; j++) {
			result++;
			i++;
		}
	}
	return result;
}

function gh(a,b) {
	return a&b;
}

function jk(a,b) {
	return a|b;
}

function lm(a,b) {
	return a^b;
}

function wx(a,b) {
	return a<<b;
}

function cv(a,b) {
	return a>>b;
}