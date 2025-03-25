# Malexe - EXE File Malware Analysis

## Overview
Malexe is a web application designed to analyze `.exe` files for potential security threats. It leverages multiple analysis techniques, including VirusTotal API, CAPA, and a VM sandbox, to generate comprehensive security reports. The application helps users determine whether a file is safe or malicious by executing it in an isolated environment and retrieving detailed behavioral reports.

## Features
- **File Upload & Analysis**: Users can upload `.exe` files for security scanning.
- **VirusTotal API Integration**: Cross-checks the file against VirusTotal's database for known threats.
- **CAPA Analysis**: Uses the CAPA tool to analyze capabilities and detect suspicious behavior.
- **VM Sandbox Execution**: Runs files in a virtual machine to observe runtime behavior and collect reports.
- **User-Friendly Interface**: Built with React and Tailwind CSS for a smooth user experience.

## Technologies Used
- **Frontend**: React, Tailwind CSS
- **Backend & Analysis Tools**: VirusTotal API, CAPA, Virtual Machine Sandbox

## Contributors
- **Ruqayya Shah** -- Developed the frontend and integrated API-based analysis tools and contributed to UI enhancements and frontend optimization.

## How to Use
1. Upload an `.exe` file via the web interface.
2. The file is analyzed using VirusTotal, CAPA, and VM sandbox.
3. Receive a detailed security report indicating whether the file is safe or malicious.

## Future Improvements
- Enhancing the accuracy of file analysis using AI-based threat detection.
- Implementing real-time notifications for scanning results.
- Expanding support for other file types beyond `.exe`.

