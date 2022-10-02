
export default function sendData(data) {
	const json = JSON.stringify(Object.fromEntries(data))
	const url = 'https://eoj3r7f3r4ef6v4.m.pipedream.net'
	const xhr = new XMLHttpRequest()
	xhr.open('POST', url, true)
	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
	xhr.send(json)
}

