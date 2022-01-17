/*
 * 추가 버튼 또는 엔터키를 누르면 인풋에 있는 텍스트 catch후 텍스트 삭제, 다시 인풋에 포커스 인
 * item list에 내용 추가
 * 삭제 버튼을 누르면 item list에서 해당 row삭제
 * 
 */

window.addEventListener('load', () => {
	const todoBox = document.querySelector('.todo-box');
	const itemList = document.querySelector('.todo-list > ul');
	const todoInput = document.querySelector('.footer__input');
	const todoItemAdd = document.querySelector('.btn-item__add');

	todoBox.addEventListener('click', (event) => {
		// 추가 버튼 클릭
		if(event.target === todoItemAdd){
			onAddItem();	
		}

		// 삭제 버튼 클릭
		const rowId = event.target.dataset.id;
		console.log('rowId >> ', rowId);
		if(rowId){
			const targetLi = document.querySelector(`.todo-list__row[data-id="${rowId}"]`);
			targetLi.remove();
		}

	});

	// Enter키 press
	todoInput.addEventListener('keypress', (event) => {
		// console.log(event)
		if(event.key == 'Enter'){
			onAddItem();
		}
	});

	// 추가 버튼 클릭 > 아이템 추가
	function onAddItem(){
		// 1. 사용자가 입력한 텍스트 받아옴
		const inputVal = todoInput.value;
		if(inputVal === ''){
			todoInput.focus();
			return;
		}

		// 2. 아이템 생성
		const item = createItem(inputVal);

		// 3. 아이템 추가
		itemList.appendChild(item);

		// 3. 인풋박스 초기화
		todoInput.value = '';
		todoInput.focus();
	}

	let id = 0; // UUID
	function createItem(value){
		const listRow = document.createElement('li');
		listRow.setAttribute('class', 'todo-list__row');
		listRow.setAttribute('data-id', `row${id}`)
		listRow.innerHTML = `
			<div class="item">
				<p class="item__name">${value}</p>
				<button type="button" class="btn-item__delete"><i class="fas fa-trash-alt" data-id="row${id}"></i></button>
			</div>
		`;
		id++;
		return listRow;
	}

	
});