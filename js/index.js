const id_check = () => {
    const id = document.getElementById("member-UserName").value;
    const checkReult = document.getElementById("id-check-result");
    const exp = /^(?=.*[a-z])(?=.*\d)[a-z\d_-]{5,10}$/;
    if (id.length == 0) {
        checkReult.innerHTML = "필수 입력 항목입니다.";
        checkReult.style.color = "red";
        return false;
    } else if (!id.match(exp)) {
        checkReult.innerHTML = "5~10자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
        checkReult.style.color = "red";
        return false;
    } else {
        checkReult.innerHTML = "사용 가능한 아이디입니다"
        checkReult.style.color = "green";
        return true;
    }
}

const password_check = () => {
    const password = document.getElementById("member-Password").value;
    const checkReult = document.getElementById("password-check-result");
    const exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$\-_])[A-Za-z\d!#$\-_]{6,18}$/;
    if (password.length == 0) {
        checkReult.innerHTML = "필수 입력 항목입니다.";
        checkReult.style.color = "red";
        return false;
    } else if (!password.match(exp)) {
        checkReult.innerHTML = "6~18자 영문 대 소문자, 숫자, 특수문자(!),(#),($),(-),(_)를 사용하세요.";
        checkReult.style.color = "red";
        return false;
    } else {
        checkReult.innerHTML = "사용 가능한 비밀번호입니다"
        checkReult.style.color = "green";
        return true;
    }
}

const password_confirm = () => {
    const memberPassword = document.getElementById("member-Password").value;
    const memberPasswordConfirm = document.getElementById("password-Confirm").value;
    const checkResult = document.getElementById("password-confirm-result");
    if (memberPassword == 0) {
        checkResult.innerHTML = "필수 입력 항목입니다";
        checkResult.style.color = "red";
        return false;
    } else if (memberPassword == memberPasswordConfirm) {
        checkResult.innerHTML = "일치합니다";
        checkResult.style.color = "green";
        return true;
    } else {
        checkResult.innerHTML = "일치하지 않습니다";
        checkResult.style.color = "red";
        return false;
    }

}

const name_check = () => {
    const name = document.getElementById("member-Name").value;
    const checkResult = document.getElementById("name-check-result");
    if (name.length == 0) {
        checkResult.innerHTML = "필수 입력 항목입니다.";
        checkResult.style.color = "red";
        return false;
    } else {
        checkResult.innerHTML = ""
        return true;
    }
}

const mobile_check = () => {
    const mobile = document.getElementById("member-Mobile").value;
    const checkResult = document.getElementById("mobile-check-result");
    const getCodeBtn = document.getElementById("get-code-btn");
    const exp = /^\d{3}-\d{4}-\d{4}$/;
    if (mobile.length == 0) {
        checkResult.innerHTML = "필수 입력 항목입니다."
        checkResult.style.color = "red";
        getCodeBtn.disabled = true;
        return false;
    } else if (!mobile.match(exp)) {
        checkResult.innerHTML = "010-0000-0000 형식으로 입력해주세요"
        checkResult.style.color = "red";
        getCodeBtn.disabled = true;
        return false;
    } else {
        checkResult.innerHTML = "올바른 전화번호"
        checkResult.style.color = "green";
        getCodeBtn.disabled = false;
        return true;
    }
}


const domain_select = () => {
    const domain = document.getElementById("email-domain-select");
    const domainInput = document.getElementById("email-domain")
    domainInput.value = domain.value;
}

function gender_check() {
    var male = document.getElementsByName("gender")[0];
    var female = document.getElementsByName("gender")[1];
    const checkResult = document.getElementById("gender-check-result");
    if (!male.checked && !female.checked) {
        checkResult.innerHTML = "성별을 선택해주세요";
        checkResult.style.color = "red";
        return false;
    } else {
        checkResult.innerHTML = "";
        return true;
    }
}


const change_input_type = () => {
    event.preventDefault();
    const passwordInput = document.getElementById("member-Password");
    const passwordReInput = document.getElementById("password-Confirm");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordReInput.type = "text";
        event.target.innerText = "비밀번호 숨기기"
    } else {
        passwordInput.type = "password";
        passwordReInput.type = "password";
        event.target.innerText = "비밀번호 보기"
    }
    return false;
}

const signup_check = () => {
    const id = document.getElementById("member-UserName");
    const password = document.getElementById("member-Password");
    const passwordConfirm = document.getElementById("password-Confirm");
    const name = document.getElementById("member-Name");
    const mobile = document.getElementById("member-Mobile");
    const code = document.getElementById("input-code");



    let pass = true;

    if (!id_check()) {
        id.focus();
        pass = false;
    }

    if (!password_check()) {
        password.focus();
        pass = false;
    }

    if (!password_confirm()) {
        passwordConfirm.focus();
        pass = false;
    }

    if (!name_check()) {
        name.focus();
        pass = false;
    }

    if (!mobile_check()) {
        mobile.focus();
        pass = false;
    }

    if (!code_check()) {
        code.focus();
        pass = false;
    }

    if (!gender_check()) {
        pass = false;
    }

    if (pass) {
        document.getElementById("signup_form").submit();
    }

}


let random_code = "";


const get_code = () => {
    random_code = Math.random().toString().substr(2, 6); // 0.을 제외한 첫 6자리 추출
    alert(random_code);
    return random_code;
}

const code_check = () => {
    event.preventDefault();
    const code = document.getElementById("input-code").value;
    const checkResult = document.getElementById("code-check-result");
    const codeCheckBtn = document.getElementById("code-check-btn");
    if (code === "") {
        checkResult.innerHTML = "인증번호를 입력해주세요";
        checkResult.style.color = "red";
    } else if (code === random_code) {
        checkResult.innerHTML = "일치합니다"
        checkResult.style.color = "green";
        return true;
    } else {
        checkResult.innerHTML = "일치하지 않습니다"
        checkResult.style.color = "red";
        return false;
    }

}

function sample6_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var addr = ''; // 주소 변수
            var extraAddr = ''; // 참고항목 변수

            //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
            if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                addr = data.roadAddress;
            } else { // 사용자가 지번 주소를 선택했을 경우(J)
                addr = data.jibunAddress;
            }

            // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
            if (data.userSelectedType === 'R') {
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                    extraAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if (data.buildingName !== '' && data.apartment === 'Y') {
                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if (extraAddr !== '') {
                    extraAddr = ' (' + extraAddr + ')';
                }
                // 조합된 참고항목을 해당 필드에 넣는다.
                document.getElementById("sample6_extraAddress").value = extraAddr;

            } else {
                document.getElementById("sample6_extraAddress").value = '';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('sample6_postcode').value = data.zonecode;
            document.getElementById("sample6_address").value = addr;
            // 커서를 상세주소 필드로 이동한다.
            document.getElementById("sample6_detailAddress").focus();
        }
    }).open();

    const goIndex = () => {
        location.href = "index.html";
    }
}

const login_name_check = () => {
    const name = document.getElementById("login-user-name").value;

    if (name.length == 0) {
        return false;
    } else {
        return true;
    }
}

const login_password_check = () => {
    const password = document.getElementById("login-user-password").value;

    if (password.length == 0) {
        return false;
    } else {
        return true;
    }
}


const login_check = () => {
    const name = document.getElementById("login-user-name");
    const nameResult = document.getElementById("name-check-result");
    const password = document.getElementById("login-user-password");
    const passwordResult = document.getElementById("password-check-result");

    if (!login_name_check()) {
        name.focus();
        nameResult.innerHTML = "아이디를 입력해주세요";
        nameResult.style.color = "red";
        return false;
    } if (!login_password_check()) {
        password.focus();
        passwordResult.innerHTML = "비밀번호를 입력해주세요";
        passwordResult.style.color = "red";
        return false;
    } else {
        return true;
    }
}

const goSave = () => {
    location.href = "save.html";
}