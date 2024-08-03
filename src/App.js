import './index.css'

function App() {
  const [open, setOpen] = useState(false); // Initialize state

  return (
    <div>
      <Sidebar open={open} setOpen={setOpen} />
     
    </div>
  );
}

export default App;