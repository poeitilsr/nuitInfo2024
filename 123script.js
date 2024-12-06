let currentAudio = null;


async function ehCaCrieouPasLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA(){const a=document.getElementById("status");const b=document.getElementById("volume");try{const c=await navigator.mediaDevices.getUserMedia({audio:true});a.textContent="EH CA MARCHE LA OUAIS OUAIS";const d=new(window.AudioContext||window.webkitAudioContext)();const e=d.createMediaStreamSource(c);const f=d.createAnalyser();f.fftSize=256;const g=new Uint8Array(f.frequencyBinCount);e.connect(f);function janalysebienlaudioCOMMEILFAUTPOTOehjouepasavecmoisinnonhein(){f.getByteTimeDomainData(g);let sum = 0;for(let i=0;i<g.length;i++){const h=g[i]-128;sum+=h*h;}const i=Math.sqrt(sum/g.length);b.textContent=`Volume:${i.toFixed(2)}`;if(i>80){a.textContent="EH CA CRIE DE FOU DE FOU LA OUAIS"; if (currentAudio) {
    currentAudio.pause(); // Stop the audio
    currentAudio.currentTime = 0; // Reset the audio playback
    currentAudio = null; // Clear the reference
}}else{a.textContent="crie jusqu'à 80 pour stopper le podcast";}requestAnimationFrame(janalysebienlaudioCOMMEILFAUTPOTOehjouepasavecmoisinnonhein);}janalysebienlaudioCOMMEILFAUTPOTOehjouepasavecmoisinnonhein();}catch(err){console.error("EH actives ton micro MAINTENANT LA", err);a.textContent="boooh eh il active même pas son micro looser";}}

document.addEventListener('DOMContentLoaded', () => {
    ehCaCrieouPasLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA();
});


// Get the overlay image element
const overlayImage = document.getElementById('overlayImage');

// Add a click event listener to toggle the zoom effect
overlayImage.addEventListener('click', () => {
    overlayImage.classList.toggle('zoomed'); // Toggle the zoom class
    
   // Check if there's already a playing audio and stop it
   if (currentAudio) {
    currentAudio.pause(); // Stop the audio
    currentAudio.currentTime = 0; // Reset the audio playback
    currentAudio = null; // Clear the reference
}

// If the image is zoomed in, start playing its audio
if (overlayImage.classList.contains('zoomed')) {
      currentAudio = new Audio("Podcastpoumons.wav"); // Create a new audio object
    currentAudio.play(); // Play the audio
  }
});

// Get the overlay image element
const overlayImage2 = document.getElementById('overlayImage2');

// Add a click event listener to toggle the zoom effect
overlayImage2.addEventListener('click', () => {
  overlayImage2.classList.toggle('zoomed'); // Toggle the zoom class
    
  // Check if there's already a playing audio and stop it
   if (currentAudio) {
       currentAudio.pause(); // Stop the audio
    currentAudio.currentTime = 0; // Reset the audio playback
    currentAudio = null; // Clear the reference
  }

  // If the image is zoomed in, start playing its audio
  if (overlayImage2.classList.contains('zoomed')) {
    currentAudio = new Audio("ProjetRein.wav"); // Create a new audio object
    currentAudio.play(); // Play the audio
}
});

// Get the overlay image element
const overlayImage3 = document.getElementById('overlayImage3');

// Add a click event listener to toggle the zoom effect
overlayImage3.addEventListener('click', () => {
    overlayImage3.classList.toggle('zoomed'); // Toggle the zoom class
    
   // Check if there's already a playing audio and stop it
   if (currentAudio) {
    currentAudio.pause(); // Stop the audio
    currentAudio.currentTime = 0; // Reset the audio playback
    currentAudio = null; // Clear the reference
  }
  
  // If the image is zoomed in, start playing its audio
  if (overlayImage3.classList.contains('zoomed')) {
      currentAudio = new Audio("Projetcerveau.wav"); // Create a new audio object
      currentAudio.play(); // Play the audio
    }
});


// Get the overlay image element
const overlayImage4 = document.getElementById('overlayImage4');

// Add a click event listener to toggle the zoom effect
overlayImage4.addEventListener('click', () => {
  overlayImage4.classList.toggle('zoomed'); // Toggle the zoom class
    
   // Check if there's already a playing audio and stop it
   if (currentAudio) {
    currentAudio.pause(); // Stop the audio
    currentAudio.currentTime = 0; // Reset the audio playback
    currentAudio = null; // Clear the reference
  }

  // If the image is zoomed in, start playing its audio
  if (overlayImage4.classList.contains('zoomed')) {
    currentAudio = new Audio("Projetcerveau.wav"); // Create a new audio object
    currentAudio.play(); // Play the audio
  }
});

// Get the overlay image element
const overlayImage5 = document.getElementById('overlayImage5');

// Add a click event listener to toggle the zoom effect
overlayImage5.addEventListener('click', () => {
    overlayImage5.classList.toggle('zoomed'); // Toggle the zoom class
      
     // Check if there's already a playing audio and stop it
     if (currentAudio) {
      currentAudio.pause(); // Stop the audio
      currentAudio.currentTime = 0; // Reset the audio playback
      currentAudio = null; // Clear the reference
    }
  
    // If the image is zoomed in, start playing its audio
    if (overlayImage5.classList.contains('zoomed')) {
      currentAudio = new Audio("Projetcerveau.wav"); // Create a new audio object
      currentAudio.play(); // Play the audio
    }
  });

  // Get the overlay image element
  const overlayImage6 = document.getElementById('overlayImage6');

  // Add a click event listener to toggle the zoom effect
  overlayImage6.addEventListener('click', () => {
    overlayImage6.classList.toggle('zoomed'); // Toggle the zoom class
      
     // Check if there's already a playing audio and stop it
     if (currentAudio) {
      currentAudio.pause(); // Stop the audio
      currentAudio.currentTime = 0; // Reset the audio playback
      currentAudio = null; // Clear the reference
    }
  
    // If the image is zoomed in, start playing its audio
    if (overlayImage6.classList.contains('zoomed')) {
      currentAudio = new Audio("Projetcerveau.wav"); // Create a new audio object
      currentAudio.play(); // Play the audio
    }
});

// Get the overlay image element
const overlayImage7 = document.getElementById('overlayImage7');

  // Add a click event listener to toggle the zoom effect
overlayImage7.addEventListener('click', () => {
    overlayImage7.classList.toggle('zoomed'); // Toggle the zoom class
    
    // Check if there's already a playing audio and stop it
    if (currentAudio) {
      currentAudio.pause(); // Stop the audio
      currentAudio.currentTime = 0; // Reset the audio playback
      currentAudio = null; // Clear the reference
    }
  
    // If the image is zoomed in, start playing its audio
    if (overlayImage7.classList.contains('zoomed')) {
      currentAudio = new Audio("Projetcerveau.wav"); // Create a new audio object
      currentAudio.play(); // Play the audio
    }
});