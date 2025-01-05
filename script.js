const btnEnvio = document.querySelector('.btn-gerar');
const content = document.querySelector(".meu-cv");
const contentMain = document.querySelector(".cv");
const contentForm = document.querySelector(".form");
const btnBaixar = document.querySelector(".btn-baixar")

const nomeCV = document.querySelector('.nome');
const cargoCV = document.querySelector('.cargo');
const localCV = document.querySelector('.local');

const sobreCV = document.querySelector('.sobre-text');

const emapresaCV = document.querySelector('.empresa');
const cargoEmpresaCV = document.querySelector('.cargo-empresa');

const institutoCV = document.querySelector('.instituto');
const descricaoFormCV = document.querySelector('.descricao-form');
const dataCV = document.querySelector('.data');

const emailCV = document.querySelector('.email');
const numeroCV = document.querySelector('.numero');
const linkCV = document.querySelector('.link');

const camp1CV = document.querySelector('.comp1');
const camp2CV = document.querySelector('.comp2');
const camp3CV = document.querySelector('.comp3');

btnEnvio.addEventListener('click', (event) => {
    event.preventDefault();
    const nomeInput = document.querySelector('.nomeInput').value;
    const localInput = document.querySelector('.localInput').value;
    const cargoInput = document.querySelector('.cargoInput').value;

    const sobreInput = document.querySelector('.sobreInput').value;

    const empresaInput = document.querySelector('.empresaInput').value;
    const cargoEInput = document.querySelector('.cargoEInput').value;

    const InstiInput = document.querySelector('.InstiInput').value;
    const dataInput = document.querySelector('.dataInput').value;
    const sfInput = document.querySelector('.sfInput').value;

    const c1Input = document.querySelector('.c1Input').value;
    const c2Input = document.querySelector('.c2Input').value;
    const c3Input = document.querySelector('.c3Input').value;

    const emailInput = document.querySelector('.emailInput').value;
    const telInput = document.querySelector('.telInput').value;
    const linkInput = document.querySelector('.linkInput').value;

    nomeCV.innerHTML += nomeInput
    cargoCV.innerHTML += cargoInput
    localCV.innerHTML += localInput
    sobreCV.innerHTML += sobreInput
    empresaInput.innerHTML += empresaInput
    cargoEmpresaCV.innerHTML += cargoEInput
    institutoCV.innerHTML += InstiInput
    dataCV.innerHTML += dataInput
    descricaoFormCV.innerHTML += sfInput
    camp1CV.innerHTML += c1Input
    camp2CV.innerHTML += c2Input
    camp3CV.innerHTML += c3Input
    emailCV.innerHTML += emailInput
    numeroCV.innerHTML += telInput
    linkCV.innerHTML += linkInput

    contentMain.style.display = 'flex';
    contentForm.style.display = 'none';
    
});

function downloadPDF() {
    const item = document.querySelector(".meu-cv");

    var opt = {
        margin: 0,
        filename: "meu-CV.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(item).save();
}

btnBaixar.addEventListener('click', ()=>{
    downloadPDF();
})
