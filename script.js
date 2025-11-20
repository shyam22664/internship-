// App logic for Edu Technologies professional site
function toggleMenu(){
  const menu = document.getElementById('sideMenu');
  menu.style.width = menu.style.width === '320px' ? '0' : '320px';
  menu.setAttribute('aria-hidden', menu.style.width === '0');
}
function closeMenu(){ const menu=document.getElementById('sideMenu'); menu.style.width='0'; menu.setAttribute('aria-hidden','true'); }

function showSection(name){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  const el = document.getElementById(name);
  if(el) el.classList.add('active');
  closeMenu();
  closeModal();
}

const data = {
  penetration: {
    title: 'Penetration Testing Internship',
    desc: 'Intensive hands-on program covering vulnerability discovery, exploitation basics, Burp Suite workflows, post-exploitation reporting and responsible disclosure. Includes lab exercises and a final capstone.'
  },
  web: { title:'Web Development Internship', desc:'Front-end & back-end projects, React, Node, REST APIs, deployment.'},
  data: { title:'Data Science Internship', desc:'Statistics, data cleaning, ML models, evaluation, and deployment.'},
  cloud: { title:'Cloud Computing Internship', desc:'Cloud fundamentals, IaC, Docker, Kubernetes, CI/CD and monitoring.'},
  ethical: { title:'Ethical Hacking Internship', desc:'OSINT, wireless security, social engineering basics, blue/red team exercises.'}
};

function openInternshipModal(key){
  const info = data[key];
  const modal = document.getElementById('internshipModal');
  document.getElementById('modalTitle').innerText = info.title;
  document.getElementById('modalDesc').innerText = info.desc;
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
}

function closeModal(){ const modal = document.getElementById('internshipModal'); if(modal){ modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); } }

function onApply(){
  // simple realistic application flow
  const confirmed = confirm('Do you want to start the application process? You will be asked to submit your CV and a short cover note.');
  if(confirmed){
    alert('Application started — please email your CV to support@edutech.com with subject "Application - ' + document.getElementById('modalTitle').innerText + '".');
    closeModal();
  }
}

// Verification logic - single known internship ID
const VALID_ID = 'STYH567';

function verifyID(){
  const input = document.getElementById('verifyInput').value.trim().toUpperCase();
  const box = document.getElementById('verifyResult');
  box.classList.remove('hidden');
  box.innerHTML = '';
  if(!input){
    box.innerHTML = '<h3>Enter an Internship ID</h3><p class="muted">Please enter the internship ID printed on the certificate.</p>';
    return;
  }
  if(input === VALID_ID){
    box.innerHTML = `
      <h3>✔ Internship Verified</h3>
      <p><strong>Name:</strong> P. Sai Shyam</p>
      <p><strong>Role:</strong> Penetration Testing</p>
      <p><strong>Internship ID:</strong> STYH567</p>
      <p><strong>CIN PIN:</strong> IGH/234/JYT</p>
      <p><strong>Duration:</strong> 15-06-2025 to 05-08-2025</p>
      <p><strong>Certificate Issued:</strong> 10-08-2025</p>
    `;
  } else {
    box.innerHTML = '<h3>❌ No internship found for this ID</h3><p class="muted">Please check the ID and try again.</p>';
  }
}

// initialize default
document.addEventListener('DOMContentLoaded', ()=>{
  showSection('home');
});
