import React, { useState } from 'react';

const AddTemplate = () => {
    const [fileInputs, setFileInputs] = useState([
        { id: 0, file: null }
    ]);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (event, inputId) => {
        const file = event.target.files[0];
        setMessage('');
        setFileInputs(prevInputs =>
            prevInputs.map(input =>
                input.id === inputId ? { ...input, file } : input
            )
        );
    };

    const addFileInput = () => {
        setFileInputs(prevInputs => [
            ...prevInputs,
            { id: prevInputs.length, file: null }
        ]);
    };

    const removeFileInput = (idToRemove) => {
        if (fileInputs.length > 1) {
            setFileInputs(prevInputs =>
                prevInputs.filter(input => input.id !== idToRemove)
            );
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const hasFiles = fileInputs.some(input => input.file);
        if (!hasFiles) {
            setMessage('Please select at least one file!');
            return;
        }

        setIsLoading(true);
        
        try {
            // Create FormData object
            const formData = new FormData();
            fileInputs.forEach((input, index) => {
                if (input.file) {
                    formData.append(`file${index}`, input.file);
                }
            });

            // Example API call - Replace with your actual API endpoint
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setMessage('Files uploaded successfully!');
                // Reset to initial state
                setFileInputs([{ id: 0, file: null }]);
                event.target.reset();
            } else {
                throw new Error('Upload failed');
            }
        } catch (error) {
            setMessage('Error uploading files. Please try again.');
            console.error('Upload error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="row">
            <div className="col-md-6">
                    <div className="card-header">
                        <h5 className="card-title mb-0">File Upload</h5>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            {fileInputs.map((input) => (
                                <div key={input.id} className="mt-4 mb-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="flex-grow-1">
                                            <label htmlFor={`fileUpload${input.id}`} className="form-label">
                                                Choose File {input.id + 1}
                                            </label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id={`fileUpload${input.id}`}
                                                onChange={(e) => handleFileChange(e, input.id)}
                                                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                                            />
                                        </div>
                                        {fileInputs.length > 1 && (
                                            <button
                                                type="button"
                                                className="btn btn-danger mt-4"
                                                onClick={() => removeFileInput(input.id)}
                                            >
                                                  <i className="bi-x"></i>
                                            </button>
                                        )}
                                    </div>
                                    {input.file && (
                                        <div className="form-text">
                                            Selected file: {input.file.name}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <button
                                type="button"
                                className="btn btn-secondary mb-3"
                                onClick={addFileInput}
                            >
                                Add More Files
                            </button>

                            {message && (
                                <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'}`}>
                                    {message}
                                </div>
                            )}

                            <div className="mt-3">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary"
                                    disabled={isLoading || !fileInputs.some(input => input.file)}
                                >
                                    {isLoading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Uploading...
                                        </>
                                    ) : (
                                        'Upload Files'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
};

export default AddTemplate;