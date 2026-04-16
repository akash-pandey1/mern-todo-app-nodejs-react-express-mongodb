import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import { store, TodoReduxContainer } from './features/todos'

function App() {
  const [activeView, setActiveView] = useState('redux') // 'redux' or 'original'

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <div className="bg-white shadow-sm border-b sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 max-w-2xl">
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => setActiveView('redux')}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  activeView === 'redux'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Redux Todo (New)
              </button>
              <button
                onClick={() => setActiveView('original')}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  activeView === 'original'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Original Todo
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-2xl">
          {activeView === 'redux' ? <TodoReduxContainer /> : <Home />}
        </div>
      </div>
    </Provider>
  )
}

export default App
