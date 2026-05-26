import { theme as primerTheme } from '@primer/react';

/* Linear-inspired override for Primer's theme. The color tokens resolve
 * through CSS variables, so sx-prop consumers (`bg: 'canvas.subtle'` etc.)
 * follow the pre-paint data-theme before React color mode hydrates. */

interface LinearColors {
  canvas: { default: string; overlay: string; inset: string; subtle: string };
  fg: { default: string; muted: string; subtle: string; onEmphasis: string };
  border: { default: string; muted: string; subtle: string };
  accent: { fg: string; emphasis: string; subtle: string; muted: string };
  success: { fg: string; emphasis: string; subtle: string; muted: string };
  attention: { fg: string; emphasis: string; subtle: string; muted: string };
  danger: { fg: string; emphasis: string; subtle: string; muted: string };
  neutral: { emphasisPlus: string; emphasis: string; muted: string; subtle: string };
  // Issue/PR semantic states — re-colored for Linear (StatusBadge).
  open: { fg: string; emphasis: string; subtle: string; muted: string };
  closed: { fg: string; emphasis: string; subtle: string; muted: string };
  done: { fg: string; emphasis: string; subtle: string; muted: string };
  severe: { fg: string; emphasis: string; subtle: string; muted: string };
  // Primer v37 <Button variant="primary"> reads CSS vars, not the theme —
  // see `--button-primary-*` in globals.css. Kept for theme-reading consumers.
  btn: { primary: { bg: string; text: string; hoverBg: string; selectedBg: string; border: string } };
}

const dark: LinearColors = {
  canvas: { default: '#000000', overlay: '#0f0f0f', inset: '#050505', subtle: '#0a0a0a' },
  fg: { default: '#fafafa', muted: '#a3a3a3', subtle: '#737373', onEmphasis: '#ffffff' },
  border: { default: '#262626', muted: '#171717', subtle: 'rgba(255, 255, 255, 0.06)' },
  accent: {
    fg: '#3291ff',
    emphasis: '#0070f3',
    subtle: 'rgba(0, 112, 243, 0.14)',
    muted: 'rgba(0, 112, 243, 0.40)',
  },
  success: {
    fg: '#34d399',
    emphasis: '#10b981',
    subtle: 'rgba(16, 185, 129, 0.14)',
    muted: 'rgba(16, 185, 129, 0.40)',
  },
  attention: {
    fg: '#fbbf24',
    emphasis: '#f59e0b',
    subtle: 'rgba(245, 158, 11, 0.14)',
    muted: 'rgba(245, 158, 11, 0.40)',
  },
  danger: {
    fg: '#f87171',
    emphasis: '#ef4444',
    subtle: 'rgba(239, 68, 68, 0.14)',
    muted: 'rgba(239, 68, 68, 0.40)',
  },
  neutral: {
    emphasisPlus: '#404040',
    emphasis: '#262626',
    muted: 'rgba(255, 255, 255, 0.06)',
    subtle: 'rgba(255, 255, 255, 0.03)',
  },
  open: {
    fg: '#34d399',
    emphasis: '#10b981',
    subtle: 'rgba(16, 185, 129, 0.14)',
    muted: 'rgba(16, 185, 129, 0.40)',
  },
  closed: {
    fg: '#f87171',
    emphasis: '#ef4444',
    subtle: 'rgba(239, 68, 68, 0.14)',
    muted: 'rgba(239, 68, 68, 0.40)',
  },
  done: {
    fg: '#a78bfa',
    emphasis: '#8b5cf6',
    subtle: 'rgba(139, 92, 246, 0.14)',
    muted: 'rgba(139, 92, 246, 0.40)',
  },
  severe: {
    fg: '#fb923c',
    emphasis: '#f97316',
    subtle: 'rgba(249, 115, 22, 0.14)',
    muted: 'rgba(249, 115, 22, 0.40)',
  },
  btn: {
    primary: {
      bg: '#0070f3',
      text: '#ffffff',
      hoverBg: '#1a85ff',
      selectedBg: '#0061d5',
      border: 'transparent',
    },
  },
};

const light: LinearColors = {
  canvas: { default: '#ffffff', overlay: '#ffffff', inset: '#f5f5f5', subtle: '#fafafa' },
  fg: { default: '#0a0a0a', muted: '#525252', subtle: '#737373', onEmphasis: '#ffffff' },
  border: { default: '#e5e5e5', muted: '#ededed', subtle: 'rgba(0, 0, 0, 0.05)' },
  accent: {
    fg: '#0061d5',
    emphasis: '#0070f3',
    subtle: 'rgba(0, 112, 243, 0.08)',
    muted: 'rgba(0, 112, 243, 0.32)',
  },
  success: {
    fg: '#047857',
    emphasis: '#047857',
    subtle: 'rgba(4, 120, 87, 0.10)',
    muted: 'rgba(4, 120, 87, 0.32)',
  },
  // Darkened amber that hits AA on white (≥6.8:1).
  attention: {
    fg: '#92400e',
    emphasis: '#92400e',
    subtle: 'rgba(146, 64, 14, 0.10)',
    muted: 'rgba(146, 64, 14, 0.32)',
  },
  danger: {
    fg: '#b91c1c',
    emphasis: '#b91c1c',
    subtle: 'rgba(185, 28, 28, 0.10)',
    muted: 'rgba(185, 28, 28, 0.32)',
  },
  neutral: {
    emphasisPlus: '#0a0a0a',
    emphasis: '#525252',
    muted: 'rgba(0, 0, 0, 0.06)',
    subtle: 'rgba(0, 0, 0, 0.03)',
  },
  open: {
    fg: '#047857',
    emphasis: '#047857',
    subtle: 'rgba(4, 120, 87, 0.10)',
    muted: 'rgba(4, 120, 87, 0.32)',
  },
  closed: {
    fg: '#b91c1c',
    emphasis: '#b91c1c',
    subtle: 'rgba(185, 28, 28, 0.10)',
    muted: 'rgba(185, 28, 28, 0.32)',
  },
  done: {
    fg: '#6d28d9',
    emphasis: '#6d28d9',
    subtle: 'rgba(109, 40, 217, 0.10)',
    muted: 'rgba(109, 40, 217, 0.32)',
  },
  severe: {
    fg: '#c2410c',
    emphasis: '#c2410c',
    subtle: 'rgba(194, 65, 12, 0.10)',
    muted: 'rgba(194, 65, 12, 0.32)',
  },
  btn: {
    primary: {
      bg: '#0070f3',
      text: '#ffffff',
      hoverBg: '#0061d5',
      selectedBg: '#0061d5',
      border: 'transparent',
    },
  },
};

type AnyRecord = Record<string, unknown>;
function deepMerge<T extends AnyRecord>(base: T, override: Partial<T>): T {
  const out: AnyRecord = { ...base };
  for (const [k, v] of Object.entries(override)) {
    const cur = out[k];
    if (
      cur &&
      typeof cur === 'object' &&
      !Array.isArray(cur) &&
      v &&
      typeof v === 'object' &&
      !Array.isArray(v)
    ) {
      out[k] = deepMerge(cur as AnyRecord, v as AnyRecord);
    } else {
      out[k] = v;
    }
  }
  return out as T;
}

function cssVar(name: string, fallback: string): string {
  return `var(${name}, ${fallback})`;
}

function cssVarColors(fallback: LinearColors): LinearColors {
  return {
    canvas: {
      default: cssVar('--bg-canvas', fallback.canvas.default),
      overlay: cssVar('--bg-overlay', fallback.canvas.overlay),
      inset: cssVar('--bg-inset', fallback.canvas.inset),
      subtle: cssVar('--bg-subtle', fallback.canvas.subtle),
    },
    fg: {
      default: cssVar('--fg-default', fallback.fg.default),
      muted: cssVar('--fg-muted', fallback.fg.muted),
      subtle: cssVar('--fg-subtle', fallback.fg.subtle),
      onEmphasis: cssVar('--fg-on-emphasis', fallback.fg.onEmphasis),
    },
    border: {
      default: cssVar('--border-default', fallback.border.default),
      muted: cssVar('--border-muted', fallback.border.muted),
      subtle: cssVar('--border-subtle', fallback.border.subtle),
    },
    accent: {
      fg: cssVar('--accent-fg', fallback.accent.fg),
      emphasis: cssVar('--accent-emphasis', fallback.accent.emphasis),
      subtle: cssVar('--accent-subtle', fallback.accent.subtle),
      muted: cssVar('--accent-muted', fallback.accent.muted),
    },
    success: {
      fg: cssVar('--success-fg', fallback.success.fg),
      emphasis: cssVar('--success-emphasis', fallback.success.emphasis),
      subtle: cssVar('--success-subtle', fallback.success.subtle),
      muted: cssVar('--success-muted', fallback.success.muted),
    },
    attention: {
      fg: cssVar('--attention-fg', fallback.attention.fg),
      emphasis: cssVar('--attention-emphasis', fallback.attention.emphasis),
      subtle: cssVar('--attention-subtle', fallback.attention.subtle),
      muted: cssVar('--attention-muted', fallback.attention.muted),
    },
    danger: {
      fg: cssVar('--danger-fg', fallback.danger.fg),
      emphasis: cssVar('--danger-emphasis', fallback.danger.emphasis),
      subtle: cssVar('--danger-subtle', fallback.danger.subtle),
      muted: cssVar('--danger-muted', fallback.danger.muted),
    },
    neutral: {
      emphasisPlus: cssVar('--neutral-emphasis-plus', fallback.neutral.emphasisPlus),
      emphasis: cssVar('--neutral-emphasis', fallback.neutral.emphasis),
      muted: cssVar('--neutral-muted', fallback.neutral.muted),
      subtle: cssVar('--neutral-subtle', fallback.neutral.subtle),
    },
    open: {
      fg: cssVar('--success-fg', fallback.open.fg),
      emphasis: cssVar('--success-emphasis', fallback.open.emphasis),
      subtle: cssVar('--success-subtle', fallback.open.subtle),
      muted: cssVar('--success-muted', fallback.open.muted),
    },
    closed: {
      fg: cssVar('--danger-fg', fallback.closed.fg),
      emphasis: cssVar('--danger-emphasis', fallback.closed.emphasis),
      subtle: cssVar('--danger-subtle', fallback.closed.subtle),
      muted: cssVar('--danger-muted', fallback.closed.muted),
    },
    done: {
      fg: cssVar('--done-fg', fallback.done.fg),
      emphasis: cssVar('--done-emphasis', fallback.done.emphasis),
      subtle: cssVar('--done-subtle', fallback.done.subtle),
      muted: cssVar('--done-muted', fallback.done.muted),
    },
    severe: {
      fg: cssVar('--severe-fg', fallback.severe.fg),
      emphasis: cssVar('--severe-emphasis', fallback.severe.emphasis),
      subtle: cssVar('--severe-subtle', fallback.severe.subtle),
      muted: cssVar('--severe-muted', fallback.severe.muted),
    },
    btn: {
      primary: {
        bg: cssVar('--btn-primary-bg', fallback.btn.primary.bg),
        text: cssVar('--btn-primary-fg', fallback.btn.primary.text),
        hoverBg: cssVar('--btn-primary-hover-bg', fallback.btn.primary.hoverBg),
        selectedBg: cssVar('--btn-primary-active-bg', fallback.btn.primary.selectedBg),
        border: cssVar('--btn-primary-border', fallback.btn.primary.border),
      },
    },
  };
}

export const linearTheme = deepMerge(primerTheme as unknown as AnyRecord, {
  // Route Primer's sx font tokens through the same Inter / JetBrains Mono
  // pair next/font registers as `--font-sans` / `--font-mono`. Without this,
  // `sx={{ fontFamily: 'mono' }}` still resolves to Primer's default stack.
  fonts: {
    normal: 'var(--font-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    mono: 'var(--font-mono), ui-monospace, SFMono-Regular, "SF Mono", Consolas, monospace',
  },
  colorSchemes: {
    dark: { colors: cssVarColors(dark) },
    light: { colors: cssVarColors(light) },
  },
});
