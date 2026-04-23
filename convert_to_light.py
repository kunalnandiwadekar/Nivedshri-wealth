#!/usr/bin/env python3
"""
Convert nivedshri_contact.html from dark theme to light theme
"""

# Read the original file
with open('nivedshri_contact.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Color mappings: Dark -> Light
replacements = {
    # CSS Variables in :root
    '--gold:#C9A96E;': '--gold:#A07830;',
    '--gold-light:#E2C99A;': '--gold-light:#B8924A;',
    '--gold-bright:#F0D98C;': '--gold-bright:#C9A96E;',
    '--gold-dark:#8B6B35;': '--gold-dark:#7A5C20;',
    '--gold-dim:rgba(201,169,110,0.15);': '--gold-dim:rgba(160,120,48,0.12);',
    '--gold-faint:rgba(201,169,110,0.06);': '--gold-faint:rgba(160,120,48,0.05);',
    
    '--orange:#E8651A;': '--orange:#D4530A;',
    '--orange-light:#F0834A;': '--orange-light:#E8703A;',
    '--orange-dark:#B34C10;': '--orange-dark:#A83E00;',
    '--orange-dim:rgba(232,101,26,0.15);': '--orange-dim:rgba(212,83,10,0.1);',
    '--orange-faint:rgba(232,101,26,0.07);': '--orange-faint:rgba(212,83,10,0.05);',
    
    '--bg:#0C0B09;': '--bg:#FAFAF8;',
    '--bg2:#111009;': '--bg2:#F4F2EE;',
    '--bg3:#161410;': '--bg3:#EDE9E2;',
    '--bg4:#1C1A14;': '--bg4:#E4DFD6;',
    
    '--ivory:#F4EFE6;': '--ivory:#1C1A14;',
    '--ivory-mid:#C0B49A;': '--ivory-mid:#6B6050;',
    '--ivory-dim:rgba(244,239,230,0.45);': '--ivory-dim:rgba(28,26,20,0.5);',
    '--ivory-faint:rgba(244,239,230,0.12);': '--ivory-faint:rgba(28,26,20,0.08);',
    
    '--divider:rgba(201,169,110,0.12);': '--divider:rgba(160,120,48,0.15);',
    '--divider-bright:rgba(201,169,110,0.3);': '--divider-bright:rgba(160,120,48,0.35);',
    
    # Inline rgba colors (for hardcoded values)
    'rgba(201,169,110,0.05)': 'rgba(160,120,48,0.06)',  # ghost word stroke
    'rgba(232,101,26,0.1)': 'rgba(212,83,10,0.08)',    # orb gradient
    'rgba(232,101,26,0.03)': 'rgba(212,83,10,0.03)',
    'rgba(232,101,26,0.07)': 'rgba(212,83,10,0.06)',  # orb2
    'rgba(201,169,110,0.07)': 'rgba(160,120,48,0.06)',
    'rgba(232,101,26,0.5)': 'rgba(212,83,10,0.55)',    # cursor ring border
    'rgba(232,101,26,0.2)': 'rgba(212,83,10,0.18)',    # loader bar bg
    'rgba(12,11,9,0.93)': 'rgba(250,250,248,0.95)',    # nav scrolled bg (inverted)
    'rgba(244,239,230,0.2)': 'rgba(28,26,20,0.25)',      # placeholder
    'rgba(244,239,230,0.18)': 'rgba(28,26,20,0.18)',   # cal day past
    'rgba(244,239,230,0.6)': 'rgba(28,26,20,0.55)',     # select color
    'rgba(12,11,9,0.95)': 'rgba(250,250,248,0.98)',     # success overlay
    
    # SVG stroke colors
    "stroke='%23C9A96E'": "stroke='%23A07830'",
    "stroke='%23E8651A'": "stroke='%23D4530A'",
    
    # SVG hardcoded colors in filters/gradients
    '#C9A96E': '#A07830',
    '#E8651A': '#D4530A',
    '#E2C99A': '#B8924A',
    '#F0D98C': '#C9A96E',
    '#8B6B35': '#7A5C20',
    '#F0834A': '#E8703A',
    '#B34C10': '#A83E00',
    
    # Background colors
    '#0C0B09': '#FAFAF8',
    '#111009': '#F4F2EE',
    '#161410': '#EDE9E2',
    '#1C1A14': '#E4DFD6',
    
    # Text colors
    '#F4EFE6': '#1C1A14',
    '#C0B49A': '#6B6050',
}

# Apply replacements
for old, new in replacements.items():
    content = content.replace(old, new)

# Write the new file
with open('nivedshri_contact_light.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Successfully created nivedshri_contact_light.html with light theme colors!")
print("\nKey color changes:")
print("  Dark backgrounds → Light cream backgrounds")
print("  Light text (#F4EFE6) → Dark text (#1C1A14)")
print("  Gold (#C9A96E) → Gold (#A07830)")
print("  Orange (#E8651A) → Orange (#D4530A)")
print("\nAll structure, layout, and content preserved.")
