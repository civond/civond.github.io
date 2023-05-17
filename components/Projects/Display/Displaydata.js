import Trajectory from '../../../assets/images/trajectory.png'
import Mouse from '../../../assets/images/2152_100Performance.png'
import Map from '../../../assets/images/Map.png'
import ECG from '../../../assets/images/ECG.png'
import FreqResp from '../../../assets/images/FreqResp.jpg'


export const Displaydata = [
    {
        id: {index: 0},
        name: 'Realtime ECG Monitoring',
        link: 'https://github.com/civond/ecgacquisition',
        content: 'Using Arduino, Python, and open-source hardware components, me and my team designed a realtime ECG monitoring device. My role was the software lead for signal filtering and acquisiton. During signal acquisiton, the ECG data was plotted in real time using a list and then written to a .csv file. Next, the signal was denoised using a bandpass filter with cutoff frequencies of 22.4 Hz (LPF), and 3.18 Hz (HPF). ',
        image: ECG
    },

    {
        id: {index: 1},
        name: 'Audio Noise Reduction',
        link: 'https://github.com/civond/tonalnoise',
        content: 'Using MATLAB, I evaluated and compared a low-pass Butterworth (filter #2) with a N-point moving average (filter #1) to remove high frequency noise from an audio signal. Additionally, the audio signal contains a 400 Hz tonal noise, which was attenuated by convolving the chosen LPF with a 4th order IIR notch filter. Just by comparing the frequency responses, you can see that the attenuation of the Butterworth filter is much better. This results in a much cleaner audio signal output.',
        image: FreqResp
    },
    
    {
        id: {index: 2},
        name: 'FMON DeepLabCut',
        link: 'https://github.com/civond/FMOS-DeepLabCut-Pipeline',
        content: 'Using Dropbox\'s and Google Drive\'s API in Python, this script streamlines the tedious process of managing files across shared workspaces for use in DeepLabCut\'s Google Colabs notebook. ',
        image: Trajectory
    },

    {
        id: {index: 3},
        name: 'FMON Visualization',
        link: 'https://github.com/civond/FMON_DataManagement',
        content: 'To visualize historical mouse performance data, this Python script parses through raw data files on FMOS computer and compiles relevant information into one centralized spreadsheet. Then, this spreadsheet is used to generate vaious graphs and daily performance statistics using matplotlibs and pandas.',
        image: Mouse
    },

    {   id: {index: 4},
        name: 'Mapping Earthquakes',
        link: 'https://github.com/civond/Mapping_Earthquakes',
        content: 'In this project, I used JavaScript with Mapbox to create a map overlay of earthquakes that occured in the past 7 days. Includes interchangable map backgrounds, togglable earthquake magnitudes, and display popups.',
        image: Map
    },

]