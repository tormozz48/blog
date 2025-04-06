#!/usr/bin/env python3
import sys
try:
    import PyPDF2
    
    # Open the PDF file
    with open('Andrii_Kuznietsov.pdf', 'rb') as file:
        # Create a PDF reader object
        pdf_reader = PyPDF2.PdfReader(file)
        
        # Get the number of pages
        num_pages = len(pdf_reader.pages)
        
        # Extract text from each page
        for page_num in range(num_pages):
            page = pdf_reader.pages[page_num]
            text = page.extract_text()
            print(f"--- Page {page_num + 1} ---")
            print(text)
            print("\n")
except ImportError:
    print("PyPDF2 is not installed. Installing it now...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "PyPDF2"])
    print("Please run the script again after installation.")
