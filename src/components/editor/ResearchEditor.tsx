import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Link,
  Image,
  Save,
  ArrowLeft,
  MoreVertical,
  FileText
} from 'lucide-react';
import Button from '../ui/Button';

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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Count words
    const text = contentRef.current?.innerText || '';
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  }, [content]);

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    contentRef.current?.focus();
  };

  const handleSave = async (status: 'draft' | 'published') => {
    setIsSaving(true);
    const htmlContent = contentRef.current?.innerHTML || '';
    
    // Simulate API call
    setTimeout(() => {
      onSave(title, htmlContent, status);
      setIsSaving(false);
    }, 800);
  };

  const insertLink = () => {
    const url = prompt('Enter URL:');
    if (url) execCommand('createLink', url);
  };

  const insertImage = () => {
    const url = prompt('Enter image URL:');
    if (url) execCommand('insertImage', url);
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

      {/* Toolbar */}
      <div className={`${theme.bgCard} border-b ${theme.border} sticky top-[73px] z-10`}>
        <div className="container mx-auto px-6 py-3">
          <div className="flex flex-wrap items-center gap-2">
            {/* Text Formatting */}
            <div className="flex items-center gap-1 border-r border-gray-300 dark:border-gray-700 pr-2">
              <button
                onClick={() => execCommand('bold')}
                className={`p-2 rounded hover:${theme.bgAlt} ${theme.text} transition-colors duration-200`}
                title="Bold"
              >
                <Bold className="w-4 h-4" />
              </button>
              <button
                onClick={() => execCommand('italic')}
                className={`p-2 rounded hover:${theme.bgAlt} ${theme.text} transition-colors duration-200`}
                title="Italic"
              >
                <Italic className="w-4 h-4" />
              </button>
              <button
                onClick={() => execCommand('underline')}
                className={`p-2 rounded hover:${theme.bgAlt} ${theme.text} transition-colors duration-200`}
                title="Underline"
              >
                <Underline className="w-4 h-4" />
              </button>
            </div>

            {/* Alignment */}
            <div className="flex items-center gap-1 border-r border-gray-300 dark:border-gray-700 pr-2">
              <button
                onClick={() => execCommand('justifyLeft')}
                className={`p-2 rounded hover:${theme.bgAlt} ${theme.text} transition-colors duration-200`}
                title="Align Left"
              >
                <AlignLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => execCommand('justifyCenter')}
                className={`p-2 rounded hover:${theme.bgAlt} ${theme.text} transition-colors duration-200`}
                title="Align Center"
              >
                <AlignCenter className="w-4 h-4" />
              </button>
              <button
                onClick={() => execCommand('justifyRight')}
                className={`p-2 rounded hover:${theme.bgAlt} ${theme.text} transition-colors duration-200`}
                title="Align Right"
              >
                <AlignRight className="w-4 h-4" />
              </button>
            </div>

            {/* Lists */}
            <div className="flex items-center gap-1 border-r border-gray-300 dark:border-gray-700 pr-2">
              <button
                onClick={() => execCommand('insertUnorderedList')}
                className={`p-2 rounded hover:${theme.bgAlt} ${theme.text} transition-colors duration-200`}
                title="Bullet List"
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => execCommand('insertOrderedList')}
                className={`p-2 rounded hover:${theme.bgAlt} ${theme.text} transition-colors duration-200`}
                title="Numbered List"
              >
                <ListOrdered className="w-4 h-4" />
              </button>
            </div>

            {/* Insert */}
            <div className="flex items-center gap-1">
              <button
                onClick={insertLink}
                className={`p-2 rounded hover:${theme.bgAlt} ${theme.text} transition-colors duration-200`}
                title="Insert Link"
              >
                <Link className="w-4 h-4" />
              </button>
              <button
                onClick={insertImage}
                className={`p-2 rounded hover:${theme.bgAlt} ${theme.text} transition-colors duration-200`}
                title="Insert Image"
              >
                <Image className="w-4 h-4" />
              </button>
            </div>

            {/* Font Size */}
            <select
              onChange={(e) => execCommand('fontSize', e.target.value)}
              className={`ml-2 px-2 py-1 rounded ${theme.bgAlt} ${theme.text} border ${theme.border} text-sm focus:outline-none`}
            >
              <option value="3">Normal</option>
              <option value="1">Small</option>
              <option value="5">Large</option>
              <option value="7">Huge</option>
            </select>
          </div>
        </div>
      </div>

      {/* Editor */}
      <main className="container mx-auto px-6 py-8">
        <div className={`max-w-4xl mx-auto ${theme.bgCard} rounded-xl shadow-lg p-8 md:p-12 min-h-[600px]`}>
          {/* Title */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Article Title"
            className={`w-full text-4xl font-bold ${theme.text} bg-transparent border-none outline-none mb-8 placeholder:${theme.textMuted}`}
          />

          {/* Content */}
          <div
            ref={contentRef}
            contentEditable
            suppressContentEditableWarning
            className={`min-h-[400px] ${theme.text} prose prose-lg max-w-none focus:outline-none`}
            style={{
              wordBreak: 'break-word',
              whiteSpace: 'pre-wrap'
            }}
            dangerouslySetInnerHTML={{ __html: initialContent }}
            onInput={(e) => setContent(e.currentTarget.innerHTML)}
          >
          </div>
        </div>
      </main>
    </div>
  );
}
