const initialFormState = {
  company_name: "",
  todos:[{id: Math(Math.random()*10000), text:""}]

};
const [formData, setFormData] = useState({ ...initialFormState });