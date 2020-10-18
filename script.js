let count = 0
let c = null
let s = 500
let texture = 'https://i.ibb.co/BygdH1Z/screen.jpg'
const side = document.querySelector('.side').children
for(let i = 0; i < 2; i++) {
    side[i].addEventListener('click', go)
}
for(let i = 2; i < side.length - 1; i++) {
    side[i].addEventListener('click', stage)
}
document.querySelector('#selectBox').addEventListener('change', speed)

const DisplayCh = document.querySelector('#DisplayCh')
const HomeCh = document.querySelector('#HomeCh')
const FrontCameraCh = document.querySelector('#FrontCameraCh')
const SpeakerUpperCh = document.querySelector('#SpeakerUpperCh')
const heading = document.querySelector('#heading')
const paragraph = document.querySelector('#paragraph')
const image = document.querySelector('#image')
const DisplayImageTexture = document.querySelector('#DisplayImageTexture')
const SIMCh = document.querySelector('#SIMCh')
const MotherBoardCh = document.querySelector('#MotherBoardCh')
const VibroCh = document.querySelector('#VibroCh')
const FlashCh = document.querySelector('#FlashCh')
const Micro2Ch = document.querySelector('#Micro2Ch')
const BackCameraCh = document.querySelector('#BackCameraCh')
const PowerCh = document.querySelector('#PowerCh')
const MicroCh = document.querySelector('#MicroCh')
const HeadPhonesCh = document.querySelector('#HeadPhonesCh')
const BatteryCh = document.querySelector('#BatteryCh')
const PowerButtonCh = document.querySelector('#PowerButtonCh')
const VolumeButtonCh = document.querySelector('#VolumeButtonCh')
const VolumeOffOnCh = document.querySelector('#VolumeOffOnCh')
const infoImg = document.querySelector('.infoImg')
infoImg.addEventListener('click', getInfo)

function getInfo() {
    const p = document.createElement('p')
    p.classList.add('pInfo')
    switch(count) {
        case 0: 
            p.textContent = 'Смартфон Apple iPhone 5s – это целый набор потрясающих технологий в удивительно тонком и легком металлическом корпусе. Датчик идентификации по отпечатку пальца Touch ID. A7 – первый мобильный процессор с 64-битной архитектурой. Улучшенная, еще более впечатляющая камера iSight. И сверхскоростная беспроводная связь.';
            break;
        case 2: 
            p.textContent = 'Датчик Touch ID развивает идею использования прикосновений, ведь самый надежный пароль – это отпечаток пальца. Он всегда с вами, его не надо придумывать и запоминать. Традиционная для iPhone кнопка "Домой" была изменена. Поверхность новой кнопки вырезана лазером из сапфирового стекла. Ее окружает кольцо из нержавеющей стали, которое определяет положение пальца, активирует сенсор и улучшает коэффициент "сигнал/шум". Совершенная технология не влияет на работу пользователя. Разве что разблокировать iPhone стало еще проще.';
            break;
        case 3: 
        p.textContent = 'Датчик Touch ID развивает идею использования прикосновений, ведь самый надежный пароль – это отпечаток пальца. Он всегда с вами, его не надо придумывать и запоминать. Традиционная для iPhone кнопка "Домой" была изменена. Поверхность новой кнопки вырезана лазером из сапфирового стекла. Ее окружает кольцо из нержавеющей стали, которое определяет положение пальца, активирует сенсор и улучшает коэффициент "сигнал/шум". Совершенная технология не влияет на работу пользователя. Разве что разблокировать iPhone стало еще проще.';
        break;
        case 16: 
            p.textContent = 'Смартфон Apple iPhone 5s снабжен 8-Мп камерой iSight с ультрасовременным увеличенным сенсором, который больше предыдущего на 15%. С увеличением сенсора увеличился размер каждого пикселя, что напрямую влияет на улучшение качества съемки. Светочувствительность камеры возросла на 33%. Это очень важно, так как качество, яркость и цветопередача напрямую зависят от количества проходящего света. В дополнение к этому, новая вспышка True Tone автоматически определяет, сколько света требуется для каждого снимка.';
            break;
        case 17: 
        p.textContent = 'Смартфон Apple iPhone 5s снабжен 8-Мп камерой iSight с ультрасовременным увеличенным сенсором, который больше предыдущего на 15%. С увеличением сенсора увеличился размер каждого пикселя, что напрямую влияет на улучшение качества съемки. Светочувствительность камеры возросла на 33%. Это очень важно, так как качество, яркость и цветопередача напрямую зависят от количества проходящего света. В дополнение к этому, новая вспышка True Tone автоматически определяет, сколько света требуется для каждого снимка.';
        break;
    }
    const blockInfo = document.createElement('div')
    blockInfo.classList.add('blockContent')
    blockInfo.appendChild(p)
    const blockBackground = document.createElement('div')
    blockBackground.classList.add('block')
    const x = document.createElement('p')
    x.classList.add('close')
    x.textContent = '×'
    x.style.fontSize = '40px'
    x.addEventListener('click', removeImage)
    function removeImage() {
        this.removeEventListener('click', removeImage)
        blockBackground.remove()
        blockInfo.remove()
    }
    blockBackground.appendChild(x)
    document.body.append(blockBackground, blockInfo)

}

image.addEventListener('click', viewFullSizeImage)
function viewFullSizeImage() {
    const fullImage = document.createElement('img')
    fullImage.classList.add('blockContent')
    fullImage.src = this.src
    const x = document.createElement('p')
    x.classList.add('close')
    x.textContent = '×'
    x.style.fontSize = '40px'
    x.addEventListener('click', removeImage)
    function removeImage() {
        this.removeEventListener('click', removeImage)
        block.remove()
        fullImage.remove()
    }
    const block = document.createElement('div')
    block.classList.add('block')
    block.append(x)
    document.body.append(block, fullImage)
}

function speed() {
    s = this.options[this.selectedIndex].value
}

function PowerButtonSelect(e) {
    if(e) {
        document.getElementById('PowerButtonMat').setAttribute('emissiveColor', '0.8 0.8 0.8');
    } else {
        document.getElementById('PowerButtonMat').setAttribute('emissiveColor', '0.3 0.3 0.3');
    }
}

const audioElem = new Audio('audio/audio1.mp3')
function PowerButtonOnOff() {
    if((texture != '') && (count == 0)) {
        audioElem.play()
        document.getElementById('DisplayImageTexture').setAttribute('url','https://i.ibb.co/BygdH1Z/screen.jpg');
        texture = '';
    } else {
        audioElem.play()
        document.getElementById('DisplayImageTexture').setAttribute('url','')
        texture = 'https://i.ibb.co/BygdH1Z/screen.jpg'
    }
}
    
function go() {
    clearInterval(c);
    const d = parseInt(this.dataset.number)
    if(d) {
        AfterBefore(1);
    } else {
        AfterBefore(0);
    }
}
    
function stage() {
    const b = parseInt(this.dataset.number)
    if (b>count) {
        clearInterval(c);
        c = setInterval(() => {
            AfterBefore(1)
            if (count == b) clearInterval(c)
        }, s)
    } else {
        if (count>b) {
            clearInterval(c);
            c = setInterval(() => {
                AfterBefore(0)
                if (count == b) clearInterval(c)
            }, s)
        }
    }
}
    
function AfterBefore(a) {
    if(a) {
        if (count != 29) {
        count++;
        }
    } else {
        if (count != 0) {
        count--;
        }
    }
    switch(count) {
        case 0:
            DisplayCh.setAttribute('set_destination', '0.000000 0.000000 13.181105');
            HomeCh.setAttribute('set_destination', '-0.063614 -64.152710 13.168984');
            FrontCameraCh.setAttribute('set_destination', '-1.482964 67.044777 11.986452');
            SpeakerUpperCh.setAttribute('set_destination', '-11.980888 63.270523 11.815369');
            heading.textContent = 'Смартфон собран';
            paragraph.innerHTML = 'Смартфон: <em>iPhone 5S</em><br>Цвет: <em>Silver</em><br>Размеры: <em>58.6x123.8x7.6мм</em>';
            image.src='images/Sobran.png';
            heading.appendChild(infoImg);
            break;
        case 1:
            DisplayCh.setAttribute('set_destination', '0 0 50');
            HomeCh.setAttribute('set_destination', '-0.063614 -64.152710 50');
            FrontCameraCh.setAttribute('set_destination', '-1.482964 67.044777 49');
            SpeakerUpperCh.setAttribute('set_destination', '-11.980888 63.270523 49');
            heading.textContent = 'Экран';
            paragraph.innerHTML='Тип экрана: <em>цветной IPS, сенсорный</em><br>Диагональ: <em>4 дюйм.</em><br>Размер изображения: <em>1136x640</em><br>Плотность пикселей: <em>326ppi</em>';
            image.src='images/display.png';
            DisplayImageTexture.setAttribute('url','');
            texture = 'https://i.ibb.co/BygdH1Z/screen.jpg';
            break;
        case 2:
            HomeCh.setAttribute('set_destination', '-0.063614 -64.152710 75');
            heading.textContent = 'Кнопка "Home"';
            paragraph.innerHTML='Материал: <em>Сапфировое стекло</em><br>Сканер отпечатка пальца: <em>встроенный, TouchID</em>';
            image.src='images/home.png';
            heading.appendChild(infoImg);
            break;
        case 3:
            HomeCh.setAttribute('set_destination', '-100 -84.152710 -20');
            FrontCameraCh.setAttribute('set_destination', '-1.482964 67.044777 49');
            SpeakerUpperCh.setAttribute('set_destination', '-11.980888 63.270523 49');
            break;
        case 4:
            FrontCameraCh.setAttribute('set_destination', '50 67.044777 49');
            SpeakerUpperCh.setAttribute('set_destination', '-50 63.270523 49');
            DisplayCh.setAttribute('set_destination', '0 0 50');
            heading.textContent = 'Фронтальная камера, разговорный динамик';
            paragraph.innerHTML = 'Разрешение камеры: <em>1.2 МП</em>';
            image.src='images/front.png';
            break;
        case 5:
            FrontCameraCh.setAttribute('set_destination', '-90 87.044777 -20');
            SpeakerUpperCh.setAttribute('set_destination', '-100 83.270523 -20');
            DisplayCh.setAttribute('set_destination', '-130 0 -20');
            SIMCh.setAttribute('set_destination', '38.956818 -0.027788 6.997790');
            break;
        case 6:
            SIMCh.setAttribute('set_destination', '65 -0.027788 6.997790');
            heading.textContent = 'SIM';
            paragraph.innerHTML = 'Тип SIM-карты: <em>nano SIM</em>';
            image.src='images/sim.png';
            break;
        case 7:
            SIMCh.setAttribute('set_destination', '65 90 -20');
            MotherBoardCh.setAttribute('set_destination', '23.309048 3.429428 5.897416');
            break;
        case 8:
            MotherBoardCh.setAttribute('set_destination', '23.309048 3.429428 50');
            heading.textContent = 'Материнская плата';
            paragraph.innerHTML = 'Процессор: <em>Apple A7, 1300 МГц</em><br>Количество ядер процессора: <em>2</em><br>Объем ПЗУ: <em>16/32/64 Гб</em><br>Объем ОЗУ: <em>1 Гб</em>';
            image.src='images/motherboard.png';
            break;
        case 9:
            MotherBoardCh.setAttribute('set_destination', '80 3.429428 -20');
            VibroCh.setAttribute('set_destination', '-30.733267 67.191795 5.203536');
            break;
        case 10:
            VibroCh.setAttribute('set_destination', '-30.733267 67.191795 50');
            heading.textContent = 'Вибро-мотор';
            paragraph.textContent = '';
            image.src='images/vibro.png';
            break;
        case 11:
            VibroCh.setAttribute('set_destination', '-30.733267 100 -20');
            FlashCh.setAttribute('set_destination', '14.094126 62.882950 3.536348');
            break;
        case 12:
            FlashCh.setAttribute('set_destination', '14.094126 62.882950 50');
            heading.textContent = 'Вспышка';
            paragraph.innerHTML = 'Фотовспышка: <em>тыльная, светодиодная</em><br>Фонарик: <em>есть</em>';
            image.src='images/flash.png';
            break;
        case 13:
            FlashCh.setAttribute('set_destination', '14.094126 100 -20');
            Micro2Ch.setAttribute('set_destination', '18.570633 63.081379 1.072410');
            break;
        case 14:
            Micro2Ch.setAttribute('set_destination', '18.570633 63.081379 50');
            heading.textContent = 'Микрофон';
            paragraph.textContent = '';
            image.src='images/micro.png';
            break;
        case 15:
            Micro2Ch.setAttribute('set_destination', '18.570633 100 -20');
            BackCameraCh.setAttribute('set_destination', '25.512451 63.063232 5.936086');
            break;
        case 16:
            BackCameraCh.setAttribute('set_destination', '25.512451 63.063232 50');
            heading.textContent = 'Задняя камера';
            paragraph.innerHTML = 'Разрешение камеры: <em>8 МП</em><br>Диафрагма камеры: <em>F/2.20</em><br>Поддерживаемые функции: <em>автофокус</em>';
            image.src='images/backcamera.png';
            heading.appendChild(infoImg);
            break;
        case 17:
            BackCameraCh.setAttribute('set_destination', '25.512451 100 -20');
            SpeakerLowerCh.setAttribute('set_destination', '23.504045 -61.104706 6.730632');
            break;
        case 18:
            SpeakerLowerCh.setAttribute('set_destination', '23.504045 -61.104706 50');
            heading.textContent = 'Нижний динамик';
            paragraph.textContent = '';
            image.src='images/lower.png';
            break;
        case 19:
            SpeakerLowerCh.setAttribute('set_destination', '23.504045 -130 -20');
            PowerCh.setAttribute('set_destination', '0.017672 -62.960861 6.422887');
            break;
        case 20:
            PowerCh.setAttribute('set_destination', '0.017672 -62.960861 50');
            heading.textContent = 'Разъем зарядки';
            paragraph.innerHTML = 'Тип разъема для зарядки: <em>Lightning</em>';
            image.src='images/lower.png';
            break;
        case 21:
            PowerCh.setAttribute('set_destination', '0.017672 -100 -20');
            MicroCh.setAttribute('set_destination', '-14.656327 -65.800369 6.711238');
            break;
        case 22:
            MicroCh.setAttribute('set_destination', '-14.656327 -65.800369 50');
            heading.textContent = 'Микрофон';
            paragraph.textContent = '';
            image.src='images/lower.png';
            break;
        case 23:
            MicroCh.setAttribute('set_destination', '-14.656327 -100 -20');
            HeadPhonesCh.setAttribute('set_destination', '-23.851200 -53.607761 6.439002');
            break;
        case 24:
            HeadPhonesCh.setAttribute('set_destination', '-23.851200 -53.607761 50');
            heading.textContent = '3.5 Jack';
            paragraph.textContent = '';
            image.src='images/lower.png';
            break;
        case 25:
            HeadPhonesCh.setAttribute('set_destination', '-23.851200 -100 -20');
            BatteryCh.setAttribute('set_destination', '-12.568 49.991 6.408');
            break;
        case 26:
            BatteryCh.setAttribute('set_destination', '-12.568 49.991 50');
            heading.textContent = 'Аккумулятор';
            paragraph.innerHTML = 'Тип аккумулятора: <em>Li-Ion</em><br>Емкость аккумулятора: <em>1560 мА⋅ч</em>';
            image.src='images/battery.png';
            break;
        case 27:
            BatteryCh.setAttribute('set_destination', '120 49.991 -20');
            PowerButtonCh.setAttribute('set_destination', '18.597054 74.401222 7.034411');
            VolumeButtonCh.setAttribute('set_destination', '-36.430828 24.855751 6.989827');
            VolumeOffOnCh.setAttribute('set_destination', '-36.364300 45.978512 6.986963');
            break;
        case 28:
            PowerButtonCh.setAttribute('set_destination', '18.597054 58 7.034411');
            VolumeButtonCh.setAttribute('set_destination', '-20 24.855751 6.989827');
            VolumeOffOnCh.setAttribute('set_destination', '-20 45.978512 6.986963');
            heading.textContent = 'Кнопки';
            paragraph.textContent = '';
            image.src='images/button.png';
            break;
        case 29:
            PowerButtonCh.setAttribute('set_destination', '90 90 -20');
            VolumeButtonCh.setAttribute('set_destination', '80 90 -20');
            VolumeOffOnCh.setAttribute('set_destination', '75 90 -20');
            heading.textContent = 'Смартфон разобран';
            paragraph.textContent = '';
            image.src='images/razob.png';
            break;
    }
} 