import React, { useState } from 'react';
import { X, Upload, CheckCircle2, AlertCircle, RefreshCw, Cpu, ExternalLink } from 'lucide-react';

interface DamageSample {
  id: string;
  name: string;
  part: string;
  severity: 'Minor' | 'Moderate' | 'Severe';
  estimatedCost: string;
  confidence: string;
  laborHours: string;
  details: string;
}

const SAMPLE_VEHICLES: DamageSample[] = [
  {
    id: 'sample-1',
    name: 'Front Bumper & Grille Impact',
    part: 'Front Bumper / Grille Assembly',
    severity: 'Moderate',
    estimatedCost: '₹14,500 - ₹18,000',
    confidence: '94.2%',
    laborHours: '4.5 hrs',
    details: 'Plastic deformation along lower spoiler, fractured mounting clips, scratch depth > 2.5mm.',
  },
  {
    id: 'sample-2',
    name: 'Passenger Door Crease & Scratch',
    part: 'Left Front Door Panel',
    severity: 'Minor',
    estimatedCost: '₹6,000 - ₹8,500',
    confidence: '91.8%',
    laborHours: '2.0 hrs',
    details: 'Clear coat abrasion and shallow sheet-metal dent requiring paintless dent repair (PDR).',
  },
  {
    id: 'sample-3',
    name: 'Headlamp & Fender Crumple',
    part: 'Right Fender & LED Projector Headlamp',
    severity: 'Severe',
    estimatedCost: '₹28,000 - ₹34,000',
    confidence: '96.5%',
    laborHours: '8.0 hrs',
    details: 'Shattered polycarbonate lens housing, warped quarter panel, realignment mandatory.',
  },
];

interface ClaimEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClaimEstimatorModal: React.FC<ClaimEstimatorModalProps> = ({ isOpen, onClose }) => {
  const [selectedSample, setSelectedSample] = useState<DamageSample>(SAMPLE_VEHICLES[0]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(true);

  if (!isOpen) return null;

  const handleSelectSample = (sample: DamageSample) => {
    setIsAnalyzing(true);
    setAnalysisComplete(false);
    setSelectedSample(sample);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#050505]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0A0A0A] border border-[#262626] shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Viewfinder borders */}
        <div className="viewfinder-corner viewfinder-tl viewfinder-tr viewfinder-bl viewfinder-br absolute inset-0 pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#262626] bg-[#0E0E0E]">
          <div>
            <span className="font-mono text-xs text-[#B40018] tracking-widest uppercase font-bold">
              AI COMPUTER VISION SIMULATOR
            </span>
            <h3 className="text-xl md:text-2xl font-bold font-display uppercase tracking-wide text-[#F4F1EA]">
              AI Insurance Claim Estimator
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#A3A199] hover:text-[#F4F1EA] hover:bg-[#1A1A1A] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="bg-[#121212] p-4 border border-[#262626] text-xs font-mono text-[#A3A199]">
            <p>
              <strong className="text-[#F4F1EA]">Pipeline:</strong> Input Image → CNN Bounding Box
              Localization → Damage Mask Segmentation → Severity Classifier → Benchmark Cost Engine.
            </p>
          </div>

          {/* Sample Selector */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-[#A3A199] block mb-2">
              Select Collision Case Sample to Analyze:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SAMPLE_VEHICLES.map((sample) => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => handleSelectSample(sample)}
                  className={`p-3 text-left border transition-all text-xs font-mono ${
                    selectedSample.id === sample.id
                      ? 'border-[#B40018] bg-[#1A1A1A] text-[#F4F1EA]'
                      : 'border-[#262626] bg-[#0D0D0D] text-[#A3A199] hover:border-[#404040]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-[#F4F1EA] truncate">{sample.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] px-1.5 py-0.2 border ${
                        sample.severity === 'Severe'
                          ? 'border-[#B40018] text-[#B40018]'
                          : sample.severity === 'Moderate'
                          ? 'border-amber-500 text-amber-500'
                          : 'border-emerald-500 text-emerald-500'
                      }`}
                    >
                      {sample.severity}
                    </span>
                    <span className="text-[#A3A199]">{sample.confidence}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Inspection Viewport & Simulated Vision Output */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left: Viewport with bounding overlays */}
            <div className="md:col-span-7 bg-[#050505] border border-[#262626] p-4 relative min-h-[260px] flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#A3A199] pb-2 border-b border-[#262626]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#B40018] animate-pulse" />
                  <span>CV_DETECTION_PASS</span>
                </span>
                <span>TENSOR_RESOLUTION: 1024×768</span>
              </div>

              {isAnalyzing ? (
                <div className="my-auto py-12 flex flex-col items-center justify-center text-center">
                  <RefreshCw className="w-8 h-8 text-[#B40018] animate-spin mb-3" />
                  <p className="text-xs font-mono text-[#F4F1EA]">
                    Running convolutional inference across panels...
                  </p>
                  <p className="text-[10px] font-mono text-[#A3A199] mt-1">
                    Segmenting contour boundaries &amp; depth maps
                  </p>
                </div>
              ) : (
                <div className="my-auto py-6 relative">
                  {/* Wireframe car silhouette visualization with damage highlight */}
                  <div className="w-full h-40 bg-[#101010] border border-[#262626] relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
                    <div className="text-center">
                      <Cpu className="w-10 h-10 text-[#B40018] mx-auto mb-2" />
                      <p className="text-xs font-mono text-[#F4F1EA] uppercase">
                        {selectedSample.part}
                      </p>
                    </div>

                    {/* Simulated Bounding Box Overlay */}
                    <div className="absolute top-4 right-8 bottom-6 left-12 border-2 border-[#B40018] bg-[#B40018]/15 flex items-start justify-between p-1.5 animate-pulse">
                      <span className="bg-[#B40018] text-[#F4F1EA] text-[9px] font-mono px-1 font-bold">
                        {selectedSample.part} [{selectedSample.confidence}]
                      </span>
                      <span className="bg-[#050505] text-[#F4F1EA] text-[9px] font-mono px-1 border border-[#B40018]">
                        SEV: {selectedSample.severity.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="text-[10px] font-mono text-[#A3A199] pt-2 border-t border-[#262626] flex justify-between">
                <span>MODEL: CUSTOM CNN + RESNET BACKBONE</span>
                <span>STATUS: INFERENCE VERIFIED</span>
              </div>
            </div>

            {/* Right: Itemized Cost & Assessment Report */}
            <div className="md:col-span-5 bg-[#0E0E0E] border border-[#262626] p-5 space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#B40018] font-bold block">
                ASSESSMENT BREAKDOWN
              </span>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <span className="text-[#A3A199] block text-[10px]">AFFECTED COMPONENT</span>
                  <p className="text-sm font-bold text-[#F4F1EA]">{selectedSample.part}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#262626]">
                  <div>
                    <span className="text-[#A3A199] block text-[10px]">SEVERITY TIER</span>
                    <p className="font-bold text-[#B40018]">{selectedSample.severity}</p>
                  </div>
                  <div>
                    <span className="text-[#A3A199] block text-[10px]">LABOR BENCHMARK</span>
                    <p className="font-bold text-[#F4F1EA]">{selectedSample.laborHours}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#262626]">
                  <span className="text-[#A3A199] block text-[10px]">ESTIMATED REPAIR QUOTE</span>
                  <p className="text-xl font-bold text-[#F4F1EA] text-[#B40018] mt-0.5">
                    {selectedSample.estimatedCost}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#262626]">
                  <span className="text-[#A3A199] block text-[10px] mb-1">DAMAGE DIAGNOSTICS</span>
                  <p className="text-[11px] text-[#A3A199] leading-relaxed font-sans">
                    {selectedSample.details}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border-t border-[#262626] bg-[#0E0E0E]">
          <span className="font-mono text-xs text-[#A3A199]">
            Architected by Adarsh Mohithe · Computer Vision Case Study
          </span>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Sonicsaga"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#171717] hover:bg-[#262626] text-[#F4F1EA] border border-[#262626] text-xs font-mono uppercase transition-colors"
            >
              <span>GitHub Repo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-[#B40018] hover:bg-[#7A0010] text-[#F4F1EA] text-xs font-mono font-bold uppercase transition-colors"
            >
              Close Simulator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
