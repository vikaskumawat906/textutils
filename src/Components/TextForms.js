import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
function Textforms(props) {
    const [text, setText] = useState('');
    const [speaking, setSpeaking] = useState(false);
    const synth = window.speechSynthesis;

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert in Uppercase", "Sucess");

    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert in Lowercase", "Sucess");
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text is Clear", "Sucess");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard", "Success");
    }
    const handleRemoveSpaceClick = () => {
        let newText = text.replace(/\s+/g, ' ');
        setText(newText);
        props.showAlert("Extra Spaces Removed", "Success");
    }

    const handleSpeakClick = () => {
        if (!speaking) {
            let utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = synth.getVoices().find((voice) => voice.name === 'Google');
            synth.speak(utterance);
            setSpeaking(true);
            utterance.onend = () => {
                setSpeaking(false);
            };
        } else {
            synth.cancel();
            setSpeaking(false);
        }
    }

    const handleDownloadClick = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "text.txt";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        props.showAlert("Text Downloaded Successfully", "Success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <Container style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h2>Enter The Text To Analyze</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" value={text} rows={8} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(4,39,67)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} />
                    </Form.Group>
                    <Button disabled={text.length === 0} variant="primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</Button>
                    <Button disabled={text.length === 0} variant="primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</Button>
                    <Button disabled={text.length === 0} variant="primary mx-2 my-1" onClick={handleClearClick}>Clear Text</Button>
                    <Button disabled={text.length === 0} variant="primary mx-2 my-1" onClick={handleCopyClick}>Copy Text</Button>
                    <Button disabled={text.length === 0} variant="primary mx-2 my-1" onClick={handleRemoveSpaceClick}>Remove Extra Spaces</Button>
                    <Button disabled={text.length === 0} variant="primary mx-2 my-1" onClick={handleSpeakClick}>{speaking ? "Stop Speaking" : "Speak Text"}</Button>
                    <Button disabled={text.length === 0} variant="primary mx-2 my-1" onClick={handleDownloadClick}>Download Text</Button>

                </Form>
                <h3 className='my-3'>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((element) => { return -element.length !== 0 }).length} Words and {text.length} Charcters</p>
            </Container>
        </>
    )
}
export default Textforms;
