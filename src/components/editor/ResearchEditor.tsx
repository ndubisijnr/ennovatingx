import { useState, useEffect, useMemo } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import {
  Save,
  ArrowLeft,
  MoreVertical,
  FileText,
} from 'lucide-react';
import Button from '../ui/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './quill-custom.css';

interface ResearchEditorProps {
  articleId?: string;
  initialTitle?: string;
  initialContent?: string;
  onSave: (title: string, content: string, status: 'draft' | 'published') => void;
  onBack: () => void;
}

export default function ResearchEditor({
  articleId: _articleId,
  initialTitle = '',
  initialContent = '',
  onSave,
  onBack
}: ResearchEditorProps) {
  const { theme } = useTheme();
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  const [isSaving, setIsSaving] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  // Quill modules configuration
  const modules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['link', 'image'],
      [{ 'align': [] }],
      ['clean']
    ],
  }), []);

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent',
    'link', 'image',
    'align'
  ];

  useEffect(() => {
    const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const words = text ? text.split(' ').filter((w) => w.length > 0) : [];
    setWordCount(words.length);
  }, [content]);

  const handleSave = async (status: 'draft' | 'published') => {
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      onSave(title, content, status);
      setIsSaving(false);
    }, 800);
  };

  return (
    <div className={`min-h-screen ${theme.bg} transition-colors duration-500`}>
      {/* Header */}
      <header className={`${theme.header} backdrop-blur-md border-b ${theme.border} sticky top-0 z-10`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className={`p-2 rounded-lg ${theme.text} hover:${theme.bgAlt} transition-colors duration-300`}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <FileText className={`w-5 h-5 ${theme.textMuted}`} />
                <span className={`text-sm ${theme.textMuted}`}>
                  {wordCount} words
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                onClick={() => handleSave('draft')}
                variant="secondary"
                size="md"
                disabled={isSaving}
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </Button>
              <Button
                onClick={() => handleSave('published')}
                variant="primary"
                size="md"
                disabled={isSaving || !title.trim()}
              >
                Publish
              </Button>
              <button
                onClick={() => setShowMenu(!showMenu)}
                className={`p-2 rounded-lg ${theme.text} hover:${theme.bgAlt} transition-colors duration-300`}
              >
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Quill Editor */}
      <main className="container mx-auto px-6 py-8">
        <div className={`max-w-4xl mx-auto ${theme.bgCard} rounded-xl shadow-lg p-6 md:p-8`}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Article Title"
            className={`w-full text-4xl font-bold ${theme.text} bg-transparent border-none outline-none mb-6 placeholder:${theme.textMuted}`}
          />
          
          <div className={`quill-wrapper ${theme.text}`}>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              placeholder="Start writing your research here..."
              className={`min-h-[400px] ${theme.text}`}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
