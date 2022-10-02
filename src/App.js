import './App.css'
import Form from './components/Form/Form.js'
import sendData from './DAL/DAL.js'

function App() {
    return (
        <div className='app'>
        	<div className='container'>
        		<h1 className='title'>
        			Рассчитайте стоимость автомобиля в лизинг
        		</h1>
        		<Form sendData={sendData}/>
        	</div>
        </div>
    )
}

export default App